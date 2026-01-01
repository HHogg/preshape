import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export type MenuConfig = MenuConfigEntry[];

export type MenuConfigEntry =
  | MenuConfigEntryDivider
  | MenuConfigEntryBoolean
  | MenuConfigEntryNumber
  | MenuConfigEntryOneOf<any>
  | MenuConfigEntryManyOf<any>
  | MenuConfigEntryAction
  | MenuConfigEntryActions
  | MenuConfigEntryRange<any>
  | MenuConfigEntrySubmenu
  | MenuConfigEntryText;

export type MenuConfigEntryWithValue =
  | MenuConfigEntryBoolean
  | MenuConfigEntryNumber
  | MenuConfigEntryOneOf<any>
  | MenuConfigEntryManyOf<any>
  | MenuConfigEntryRange<number | [number, number]>;

export type MenuConfigEntryDivider = {
  type: 'divider';
};

export type MenuConfigEntryText = {
  type: 'text';
  value: ReactNode;
};

export type MenuConfigEntryBase = {
  label: string;
  description?: string;
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

export type MenuConfigEntryRange<TValue extends [number, number] | number> =
  MenuConfigEntryBase & {
    type: 'range';
    value: TValue;
    min: number;
    max: number;
    step: number;
    formatter?: (value: number) => string;
    onChange: (value: TValue) => void;
  };

export type MenuConfigEntrySubmenu = MenuConfigEntryBase & {
  type: 'submenu';
  config: MenuConfig;
};

export const isMenuConfig = (
  value: MenuConfig | MenuConfigEntry
): value is MenuConfig => Array.isArray(value);

export const isDivider = (
  value: MenuConfigEntry
): value is MenuConfigEntryDivider => value.type === 'divider';

export const isBoolean = (
  value: MenuConfigEntry
): value is MenuConfigEntryBoolean => value.type === 'boolean';

export const isNumber = (
  value: MenuConfigEntry
): value is MenuConfigEntryNumber => value.type === 'number';

export const isOneOf = (
  value: MenuConfigEntry
): value is MenuConfigEntryOneOf<any> => value.type === 'oneOf';

export const isManyOf = (
  value: MenuConfigEntry
): value is MenuConfigEntryManyOf<any> => value.type === 'manyOf';

export const isAction = (
  value: MenuConfigEntry
): value is MenuConfigEntryAction => value.type === 'action';

export const isActions = (
  value: MenuConfigEntry
): value is MenuConfigEntryActions => value.type === 'actions';

export const isRange = (
  value: MenuConfigEntry
): value is MenuConfigEntryRange<any> => value.type === 'range';

export const isSubmenu = (
  value: MenuConfigEntry
): value is MenuConfigEntrySubmenu => value.type === 'submenu';

export const isText = (value: MenuConfigEntry): value is MenuConfigEntryText =>
  value.type === 'text';

export const getLabel = (entry: MenuConfigEntry): string => {
  switch (entry.type) {
    case 'boolean':
      return entry.value ? entry.labelTrue : entry.labelFalse;
    case 'number':
      return formatValue(entry.value, entry.formatter);
    case 'oneOf':
      return formatValue(entry.value, entry.formatter);
    case 'manyOf':
      if (entry.value.length === 0) {
        return 'None';
      } else if (entry.value.length < entry.options.length) {
        return 'Some';
      } else {
        return 'All';
      }
    case 'range':
      if (Array.isArray(entry.value)) {
        return entry.value
          .map((v) => formatValue(v, entry.formatter))
          .join(' - ');
      }

      return formatValue(entry.value, entry.formatter);
    default:
      return '';
  }
};

export const formatValue = <T>(value: T, formatter?: (value: T) => string) => {
  if (!formatter) {
    return `${value}`;
  }

  return formatter(value);
};

export const findConfigEntry = (
  config: MenuConfig | MenuConfigEntry,
  key: string
): MenuConfig | MenuConfigEntry | undefined => {
  if (!isMenuConfig(config) && isSubmenu(config)) {
    return findConfigEntry(config.config, key);
  }

  if (isMenuConfig(config)) {
    return config.find((entry) => {
      if (isDivider(entry)) return false;
      if (isAction(entry)) return false;
      if (isText(entry)) return false;
      return entry.label === key;
    });
  }

  return undefined;
};

export const toggleValueInArray = (array: string[], value: string) => {
  if (array.includes(value)) {
    return array.filter((v) => v !== value);
  } else {
    return [...array, value];
  }
};

export const getSteps = (min: number, max: number, step: number) => {
  const steps = [];

  for (let i = min; i <= max; i += step) {
    steps.push(i);
  }

  return steps;
};

export const __root = '__root';
