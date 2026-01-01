import { PropsWithChildren } from 'react';
import Menu, { MenuProps } from './Menu';
import MenuItemAction from './MenuItemAction';
import MenuItemDivider from './MenuItemDivider';
import MenuItemNavigate from './MenuItemNavigate';
import {
  getLabel,
  isAction,
  isDivider,
  isText,
  MenuConfig as MenuConfigType,
} from './utils';
import MenuItemText from './MenuItemText';

type MenuConfigBranchProps = MenuProps & {
  config: MenuConfigType;
  title: string;
  onNavigate: (label: string) => void;
};

export const MenuConfigBranch = ({
  config,
  title,
  onNavigate,
  ...rest
}: PropsWithChildren<MenuConfigBranchProps>) => {
  return (
    <Menu animation="FadeSlideRight" title={title} {...rest}>
      {config.map((entry, index) => {
        if (isDivider(entry)) {
          return <MenuItemDivider key={index} />;
        }

        // Actions don't have their own menu page
        if (isAction(entry)) {
          return (
            <MenuItemAction
              key={entry.label}
              Icon={entry.icon}
              title={entry.label}
              disabled={entry.disabled}
              onClick={(event) => {
                event.stopPropagation();

                if (isAction(entry)) {
                  entry.onAction();
                }
              }}
            />
          );
        }

        if (isText(entry)) {
          return <MenuItemText key={index}>{entry.value}</MenuItemText>;
        }

        return (
          <MenuItemNavigate
            key={entry.label}
            Icon={entry.icon}
            disabled={entry.disabled}
            onClick={() => onNavigate(entry.label)}
            title={entry.label}
            value={getLabel(entry)}
          />
        );
      })}
    </Menu>
  );
};
