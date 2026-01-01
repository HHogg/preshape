import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { useThemeContext } from '../ThemeSwitcher/useThemeContext';
import {
  TransitionBox,
  TransitionBoxProps,
} from '../TransitionBox/TransitionBox';
import {
  __root,
  findConfigEntry,
  isMenuConfig,
  isSubmenu,
  MenuConfig,
  MenuConfigEntry,
} from './utils';
import { MenuConfigBranch } from './MenuConfigBranch';
import { MenuConfigLeaf } from './MenuConfigLeaf';

export interface ConfigMenuProps extends TransitionBoxProps {
  config: MenuConfig;
  description?: string;
}

export const ConfigMenu = ({
  config,
  title = 'Settings',
  description,
  ...rest
}: PropsWithChildren<ConfigMenuProps>) => {
  const { themeOpposite } = useThemeContext();
  const [history, setHistory] = useState<string[]>([__root]);

  const activeItem = useMemo(() => {
    let activeItem: MenuConfig | MenuConfigEntry = config;

    for (let i = 1; i < history.length; i++) {
      const nextActiveItem = findConfigEntry(activeItem, history[i]);

      if (!nextActiveItem) {
        throw new Error(`Invalid history: ${history[i]}`);
      }

      activeItem = nextActiveItem;
    }

    return activeItem;
  }, [config, history]);

  const handleNavigateBackwards = () => {
    setHistory(history.slice(0, -1));
  };

  const handleNavigateForwards = useCallback(
    (key: string) => {
      const entry = findConfigEntry(activeItem, key);

      if (!entry) {
        throw new Error(`Invalid entry: ${key}`);
      }

      setHistory((prev) => [...prev, key]);
    },
    [activeItem]
  );

  return (
    <TransitionBox
      animation="Pop"
      borderRadius="x2"
      minWidth="200px"
      paddingVertical="x2"
      backgroundColor="background-shade-1"
      textColor="text-shade-1"
      theme={themeOpposite}
      {...rest}
    >
      {isMenuConfig(activeItem) && (
        <MenuConfigBranch
          config={activeItem}
          title={title}
          description={description}
          onNavigate={handleNavigateForwards}
        />
      )}

      {!isMenuConfig(activeItem) && isSubmenu(activeItem) && (
        <MenuConfigBranch
          config={activeItem.config}
          title={activeItem.label}
          description={activeItem.description}
          onBack={handleNavigateBackwards}
          onNavigate={handleNavigateForwards}
        />
      )}

      {!isMenuConfig(activeItem) && !isSubmenu(activeItem) && (
        <MenuConfigLeaf entry={activeItem} onBack={handleNavigateBackwards} />
      )}
    </TransitionBox>
  );
};
