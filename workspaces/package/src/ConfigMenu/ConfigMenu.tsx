import { LucideIcon } from 'lucide-react';
import { Fragment, PropsWithChildren, useState } from 'react';
import {
  TransitionBox,
  TransitionBoxProps,
} from '../TransitionBox/TransitionBox';
import Menu from './Menu';
import MenuItemAction from './MenuItemAction';
import MenuItemCheckBox from './MenuItemCheckBox';
import MenuItemNavigate from './MenuItemNavigate';

export interface ConfigMenuProps extends TransitionBoxProps {
  config: MenuConfig;
}
export type MenuConfig = MenuConfigEntry[];

export type MenuConfigEntry<T = MenuConfigEntryValue> = {
  label: string;
  icon: LucideIcon;
  config: T;
};

export type MenuConfigEntryValue =
  | MenuConfigBoolean
  | MenuConfigNumber
  | MenuConfigOneOf
  | MenuConfigManyOf
  | MenuConfigAction;

export type MenuConfigBoolean = {
  type: 'boolean';
  value: boolean;
  labelTrue: string;
  labelFalse: string;
  onChange: (value: boolean) => void;
};

export type MenuConfigNumber = {
  type: 'number';
  value: number;
  min: number;
  max: number;
  step: number;
  formatter?: (value: number) => string;
  onChange: (value: number) => void;
};

export type MenuConfigOneOf<T = string> = {
  type: 'oneOf';
  value: T;
  options: T[];
  formatter?: (value: T) => string;
  onChange: (value: T) => void;
};

export type MenuConfigManyOf<T = string> = {
  type: 'manyOf';
  value: T[];
  options: T[];
  formatter?: (value: T) => string;
  onChange: (value: T[]) => void;
};

export type MenuConfigAction = {
  type: 'action';
  onAction: () => void;
};

const isBoolean = (value: MenuConfigEntryValue): value is MenuConfigBoolean =>
  value.type === 'boolean';

const isNumber = (value: MenuConfigEntryValue): value is MenuConfigNumber =>
  value.type === 'number';

const isOneOf = (value: MenuConfigEntryValue): value is MenuConfigOneOf<any> =>
  value.type === 'oneOf';

const isManyOf = (
  value: MenuConfigEntryValue
): value is MenuConfigManyOf<any> => value.type === 'manyOf';

const isAction = (value: MenuConfigEntryValue): value is MenuConfigAction =>
  value.type === 'action';

const getLabel = (entry: MenuConfigEntry) => {
  switch (entry.config.type) {
    case 'boolean':
      return entry.config.value
        ? entry.config.labelTrue
        : entry.config.labelFalse;
    case 'number':
      return entry.config.formatter?.(entry.config.value) ?? entry.config.value;
    case 'oneOf':
      return entry.config.formatter?.(entry.config.value) ?? entry.config.value;
    case 'manyOf':
      if (entry.config.value.length === 0) {
        return 'None';
      } else if (entry.config.value.length < entry.config.options.length) {
        return 'Some';
      } else {
        return 'All';
      }
    case 'action':
      return entry.label;
  }
};

const toggleValueInArray = (array: string[], value: string) => {
  if (array.includes(value)) {
    return array.filter((v) => v !== value);
  } else {
    return [...array, value];
  }
};

const __root = '__root';

export const ConfigMenu = ({
  config,
  ...rest
}: PropsWithChildren<ConfigMenuProps>) => {
  const [activeKey, setActiveKey] = useState(__root);
  const activeIndex = config.findIndex((entry) => entry.label === activeKey);
  const activeEntry = activeKey === __root ? undefined : config[activeIndex];

  const createUpdateHandler =
    (
      entry: MenuConfigEntry,
      value: Exclude<MenuConfigEntryValue, MenuConfigAction>['value']
    ) =>
    () => {
      if (!isAction(entry.config)) {
        // Todo: Why as needed here?
        (
          entry.config.onChange as (
            v: Exclude<MenuConfigEntryValue, MenuConfigAction>['value']
          ) => void
        )(value);
      }

      if (!isManyOf(entry.config)) {
        setActiveKey(__root);
      }
    };

  return (
    <TransitionBox
      animation="Pop"
      backgroundColor="black"
      borderRadius="x2"
      minWidth="200px"
      paddingVertical="x2"
      textColor="text-shade-1"
      theme="night"
      {...rest}
    >
      {activeKey === __root && (
        <Menu title="Settings">
          {config.map((entry) => (
            <Fragment key={entry.label}>
              {isAction(entry.config) ? (
                <MenuItemAction
                  Icon={entry.icon}
                  title={entry.label}
                  onClick={(event) => {
                    event.stopPropagation();

                    if (isAction(entry.config)) {
                      entry.config.onAction();
                    }
                  }}
                />
              ) : (
                <MenuItemNavigate
                  Icon={entry.icon}
                  onClick={() => setActiveKey(entry.label)}
                  title={entry.label}
                  value={getLabel(entry)}
                />
              )}
            </Fragment>
          ))}
        </Menu>
      )}

      {activeEntry && activeKey !== __root && (
        <Menu onBack={() => setActiveKey(__root)} title={activeEntry.label}>
          {isBoolean(activeEntry.config) && (
            <>
              <MenuItemCheckBox
                checked={activeEntry.config.value === true}
                onClick={createUpdateHandler(activeEntry, true)}
              >
                {activeEntry.config.labelTrue}
              </MenuItemCheckBox>

              <MenuItemCheckBox
                checked={activeEntry.config.value === false}
                onClick={createUpdateHandler(activeEntry, false)}
              >
                {activeEntry.config.labelFalse}
              </MenuItemCheckBox>
            </>
          )}

          {isNumber(activeEntry.config) &&
            Array.from({
              length: Math.floor(
                (activeEntry.config.max - activeEntry.config.min) /
                  activeEntry.config.step
              ),
            }).map(
              (_, i) =>
                isNumber(activeEntry.config) && (
                  <MenuItemCheckBox
                    checked={activeEntry.config.value === i}
                    key={i}
                    onClick={createUpdateHandler(activeEntry, i)}
                  >
                    {activeEntry.config.formatter?.(i) ?? i}
                  </MenuItemCheckBox>
                )
            )}

          {isOneOf(activeEntry.config) &&
            activeEntry.config.options.map(
              (option) =>
                isOneOf(activeEntry.config) && (
                  <MenuItemCheckBox
                    checked={activeEntry.config.value === option}
                    key={option}
                    onClick={createUpdateHandler(activeEntry, option)}
                  >
                    {activeEntry.config.formatter?.(option) ?? option}
                  </MenuItemCheckBox>
                )
            )}

          {isManyOf(activeEntry.config) &&
            activeEntry.config.options.map(
              (option) =>
                isManyOf(activeEntry.config) && (
                  <MenuItemCheckBox
                    checked={activeEntry.config.value.includes(option)}
                    key={option}
                    onClick={createUpdateHandler(
                      activeEntry,
                      toggleValueInArray(activeEntry.config.value, option)
                    )}
                  >
                    {activeEntry.config.formatter?.(option) ?? option}
                  </MenuItemCheckBox>
                )
            )}
        </Menu>
      )}
    </TransitionBox>
  );
};
