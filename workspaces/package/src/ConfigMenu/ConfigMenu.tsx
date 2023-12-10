import { LucideIcon } from 'lucide-react';
import { PropsWithChildren, useState } from 'react';
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
export type MenuConfig = Record<string, ConfigEntry>;

export type ConfigEntry = {
  label: string;
  icon: LucideIcon;
  config: ConfigEntryValue;
};

export type ConfigEntryValue =
  | ConfigBoolean
  | ConfigNumber
  | ConfigOneOf
  | ConfigManyOf
  | ConfigAction;

export type ConfigBoolean = {
  type: 'boolean';
  value: boolean;
  labelTrue: string;
  labelFalse: string;
  onChange: (value: boolean) => void;
};

export type ConfigNumber = {
  type: 'number';
  value: number;
  min: number;
  max: number;
  step: number;
  formatter: (value: number) => string;
  onChange: (value: number) => void;
};

export type ConfigOneOf = {
  type: 'oneOf';
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export type ConfigManyOf = {
  type: 'manyOf';
  value: string[];
  options: string[];
  onChange: (value: string[]) => void;
};

export type ConfigAction = {
  type: 'action';
  label: string;
  action: () => void;
};

const isBoolean = (value: ConfigEntryValue): value is ConfigBoolean =>
  value.type === 'boolean';

const isNumber = (value: ConfigEntryValue): value is ConfigNumber =>
  value.type === 'number';

const isOneOf = (value: ConfigEntryValue): value is ConfigOneOf =>
  value.type === 'oneOf';

const isManyOf = (value: ConfigEntryValue): value is ConfigManyOf =>
  value.type === 'manyOf';

const isAction = (value: ConfigEntryValue): value is ConfigAction =>
  value.type === 'action';

const getLabel = (entry: ConfigEntry) => {
  switch (entry.config.type) {
    case 'boolean':
      return entry.config.value
        ? entry.config.labelTrue
        : entry.config.labelFalse;
    case 'number':
    case 'oneOf':
      return entry.config.value;
    case 'manyOf':
      if (entry.config.value.length === 0) {
        return 'None';
      } else if (entry.config.value.length < entry.config.options.length) {
        return 'Some';
      } else {
        return 'All';
      }
    case 'action':
      return entry.config.label;
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
  const activeEntry = activeKey === __root ? undefined : config[activeKey];

  const createUpdateHandler =
    (
      entry: ConfigEntry,
      value: Exclude<ConfigEntryValue, ConfigAction>['value']
    ) =>
    () => {
      if (!isAction(entry.config)) {
        // Todo: Why as needed here?
        (
          entry.config.onChange as (
            v: Exclude<ConfigEntryValue, ConfigAction>['value']
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
          {Object.keys(config).map((key) => (
            <MenuItemNavigate
              Icon={config[key].icon}
              key={key}
              onClick={() => setActiveKey(key)}
              title={config[key].label}
              value={getLabel(config[key])}
            />
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
                    {activeEntry.config.formatter(i)}
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
                    {option}
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
                    {option}
                  </MenuItemCheckBox>
                )
            )}

          {isAction(activeEntry.config) && (
            <MenuItemAction
              Icon={activeEntry.icon}
              title={activeEntry.config.label}
              onClick={() => {
                if (isAction(activeEntry.config)) {
                  activeEntry.config.action();
                  setActiveKey(__root);
                }
              }}
            />
          )}
        </Menu>
      )}
    </TransitionBox>
  );
};
