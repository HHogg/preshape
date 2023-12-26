import { LucideIcon } from 'lucide-react';
import { Fragment, PropsWithChildren, useState } from 'react';
import { useThemeContext } from '../ThemeSwitcher/useThemeContext';
import {
  TransitionBox,
  TransitionBoxProps,
} from '../TransitionBox/TransitionBox';
import Menu from './Menu';
import MenuItemAction from './MenuItemAction';
import MenuItemCheckBox from './MenuItemCheckBox';
import MenuItemDivider from './MenuItemDivider';
import MenuItemNavigate from './MenuItemNavigate';

export interface ConfigMenuProps extends TransitionBoxProps {
  config: MenuConfig;
}

export type MenuConfig = MenuConfigEntry[];

export type MenuConfigEntry =
  | MenuConfigEntryDivider
  | MenuConfigEntryBoolean
  | MenuConfigEntryNumber
  | MenuConfigEntryOneOf<any>
  | MenuConfigEntryManyOf<any>
  | MenuConfigEntryAction
  | MenuConfigEntryActions;

export type MenuConfigEntryWithValue =
  | MenuConfigEntryBoolean
  | MenuConfigEntryNumber
  | MenuConfigEntryOneOf<any>
  | MenuConfigEntryManyOf<any>;

export type MenuConfigEntryDivider = {
  type: 'divider';
};

export type MenuConfigEntryBase = {
  label: string;
  icon: LucideIcon;
  disabled?: boolean;
};

export type MenuConfigEntryBoolean = MenuConfigEntryBase & {
  type: 'boolean';
  value: boolean;
  labelTrue: string;
  labelFalse: string;
  onChange: (value: boolean) => void;
};

export type MenuConfigEntryNumber = MenuConfigEntryBase & {
  type: 'number';
  value: number;
  min: number;
  max: number;
  step: number;
  formatter?: (value: number) => string;
  onChange: (value: number) => void;
};

export type MenuConfigEntryOneOf<T> = MenuConfigEntryBase & {
  type: 'oneOf';
  value: T;
  options: T[];
  formatter?: (value: T) => string;
  onChange: (value: T) => void;
};

export type MenuConfigEntryManyOf<T> = MenuConfigEntryBase & {
  type: 'manyOf';
  value: T[];
  options: T[];
  formatter?: (value: T) => string;
  onChange: (value: T[]) => void;
};

export type MenuConfigEntryAction = MenuConfigEntryBase & {
  type: 'action';
  onAction: () => void;
};

export type MenuConfigEntryActions = MenuConfigEntryBase & {
  type: 'actions';
  actions: {
    label: string;
    onAction: () => void;
  }[];
};

const isDivider = (value: MenuConfigEntry): value is MenuConfigEntryDivider =>
  value.type === 'divider';

const isBoolean = (value: MenuConfigEntry): value is MenuConfigEntryBoolean =>
  value.type === 'boolean';

const isNumber = (value: MenuConfigEntry): value is MenuConfigEntryNumber =>
  value.type === 'number';

const isOneOf = (value: MenuConfigEntry): value is MenuConfigEntryOneOf<any> =>
  value.type === 'oneOf';

const isManyOf = (
  value: MenuConfigEntry
): value is MenuConfigEntryManyOf<any> => value.type === 'manyOf';

const isAction = (value: MenuConfigEntry): value is MenuConfigEntryAction =>
  value.type === 'action';

const isActions = (value: MenuConfigEntry): value is MenuConfigEntryActions =>
  value.type === 'actions';

const getLabel = (entry: MenuConfigEntry) => {
  switch (entry.type) {
    case 'boolean':
      return entry.value ? entry.labelTrue : entry.labelFalse;
    case 'number':
      return entry.formatter?.(entry.value) ?? entry.value;
    case 'oneOf':
      return entry.formatter?.(entry.value) ?? entry.value;
    case 'manyOf':
      if (entry.value.length === 0) {
        return 'None';
      } else if (entry.value.length < entry.options.length) {
        return 'Some';
      } else {
        return 'All';
      }
    case 'action':
    case 'actions':
      return '';
  }
};

const toggleValueInArray = (array: string[], value: string) => {
  if (array.includes(value)) {
    return array.filter((v) => v !== value);
  } else {
    return [...array, value];
  }
};

const getSteps = (min: number, max: number, step: number) => {
  const steps = [];

  for (let i = min; i <= max; i += step) {
    steps.push(i);
  }

  return steps;
};

const __root = '__root';

export const ConfigMenu = ({
  config,
  ...rest
}: PropsWithChildren<ConfigMenuProps>) => {
  const { themeOpposite } = useThemeContext();
  const [activeKey, setActiveKey] = useState(__root);
  const activeIndex = config.findIndex(
    (entry) => !isDivider(entry) && entry.label === activeKey
  );

  const activeEntry = activeKey === __root ? undefined : config[activeIndex];

  const createUpdateHandler =
    <T extends MenuConfigEntryWithValue>(entry: T, value: T['value']) =>
    () => {
      // This is block is just to make TS happy
      if (isBoolean(entry) && typeof value === 'boolean') {
        entry.onChange(value);
      } else if (isNumber(entry) && typeof value === 'number') {
        entry.onChange(value);
      } else if (isOneOf(entry) && !Array.isArray(value)) {
        entry.onChange(value);
      } else if (isManyOf(entry) && Array.isArray(value)) {
        entry.onChange(value);
      }

      if (!isManyOf(entry)) {
        setActiveKey(__root);
      }
    };

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
      {activeKey === __root && (
        <Menu title="Settings">
          {config.map((entry, index) => {
            if (isDivider(entry)) {
              return <MenuItemDivider key={index} />;
            }

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

            return (
              <MenuItemNavigate
                key={entry.label}
                Icon={entry.icon}
                disabled={entry.disabled}
                onClick={() => setActiveKey(entry.label)}
                title={entry.label}
                value={getLabel(entry)}
              />
            );
          })}
        </Menu>
      )}

      {activeEntry && activeKey !== __root && !isDivider(activeEntry) && (
        <Menu onBack={() => setActiveKey(__root)} title={activeEntry.label}>
          {isBoolean(activeEntry) && (
            <>
              <MenuItemCheckBox
                checked={activeEntry.value === true}
                onClick={createUpdateHandler(activeEntry, true)}
              >
                {activeEntry.labelTrue}
              </MenuItemCheckBox>

              <MenuItemCheckBox
                checked={activeEntry.value === false}
                onClick={createUpdateHandler(activeEntry, false)}
              >
                {activeEntry.labelFalse}
              </MenuItemCheckBox>
            </>
          )}

          {isNumber(activeEntry) &&
            getSteps(activeEntry.min, activeEntry.max, activeEntry.step).map(
              (v) =>
                isNumber(activeEntry) && (
                  <MenuItemCheckBox
                    checked={activeEntry.value === v}
                    key={v}
                    onClick={createUpdateHandler(activeEntry, v)}
                  >
                    {activeEntry.formatter?.(v) ?? v}
                  </MenuItemCheckBox>
                )
            )}

          {isOneOf(activeEntry) &&
            activeEntry.options.map(
              (option) =>
                isOneOf(activeEntry) && (
                  <MenuItemCheckBox
                    checked={activeEntry.value === option}
                    key={option}
                    onClick={createUpdateHandler(activeEntry, option)}
                  >
                    {activeEntry.formatter?.(option) ?? option}
                  </MenuItemCheckBox>
                )
            )}

          {isManyOf(activeEntry) &&
            activeEntry.options.map(
              (option) =>
                isManyOf(activeEntry) && (
                  <MenuItemCheckBox
                    checked={activeEntry.value.includes(option)}
                    key={option}
                    onClick={createUpdateHandler(
                      activeEntry,
                      toggleValueInArray(activeEntry.value, option)
                    )}
                  >
                    {activeEntry.formatter?.(option) ?? option}
                  </MenuItemCheckBox>
                )
            )}

          {isActions(activeEntry) &&
            activeEntry.actions.map((action) => (
              <MenuItemAction
                key={action.label}
                onClick={() => {
                  action.onAction();
                  setActiveKey(__root);
                }}
                title={action.label}
              />
            ))}
        </Menu>
      )}
    </TransitionBox>
  );
};
