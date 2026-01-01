import { PropsWithChildren } from 'react';
import Menu, { MenuProps } from './Menu';
import MenuItemAction from './MenuItemAction';
import {
  __root,
  getSteps,
  isActions,
  isBoolean,
  isDivider,
  isManyOf,
  isNumber,
  isOneOf,
  isRange,
  isText,
  MenuConfigEntry,
  MenuConfigEntryWithValue,
  toggleValueInArray,
} from './utils';
import MenuItemCheckBox from './MenuItemCheckBox';
import MenuItemText from './MenuItemText';
import MenuItemRange from './MenuItemRange';
import MenuItemDivider from './MenuItemDivider';

type MenuConfigLeafProps = Omit<MenuProps, 'title'> & {
  entry: MenuConfigEntry;
  onBack: () => void;
};

export const MenuConfigLeaf = ({
  entry,
  onBack,
  ...rest
}: PropsWithChildren<MenuConfigLeafProps>) => {
  if (isDivider(entry) || isText(entry)) {
    return null;
  }

  const createUpdateHandler =
    <T extends MenuConfigEntryWithValue>(entry: T, value: T['value']) =>
    () => {
      // This block is just to make TS happy
      if (isBoolean(entry) && typeof value === 'boolean') {
        entry.onChange(value);
      } else if (isNumber(entry) && typeof value === 'number') {
        entry.onChange(value);
      } else if (isOneOf(entry) && !Array.isArray(value)) {
        entry.onChange(value);
      } else if (isManyOf(entry) && Array.isArray(value)) {
        entry.onChange(value);
      } else if (isRange(entry)) {
        entry.onChange(value);
      }

      if (!isManyOf(entry) && !isRange(entry)) {
        onBack();
      }
    };

  return (
    <Menu onBack={onBack} title={entry.label} {...rest}>
      {entry.description && <MenuItemText>{entry.description}</MenuItemText>}

      {isBoolean(entry) && (
        <>
          <MenuItemCheckBox
            checked={entry.value === true}
            onClick={createUpdateHandler(entry, true)}
          >
            {entry.labelTrue}
          </MenuItemCheckBox>

          <MenuItemCheckBox
            checked={entry.value === false}
            onClick={createUpdateHandler(entry, false)}
          >
            {entry.labelFalse}
          </MenuItemCheckBox>
        </>
      )}

      {isNumber(entry) &&
        getSteps(entry.min, entry.max, entry.step).map(
          (v) =>
            isNumber(entry) && (
              <MenuItemCheckBox
                checked={entry.value === v}
                key={v}
                onClick={createUpdateHandler(entry, v)}
              >
                {entry.formatter?.(v) ?? v}
              </MenuItemCheckBox>
            )
        )}

      {isOneOf(entry) &&
        entry.options.map(
          (option) =>
            isOneOf(entry) && (
              <MenuItemCheckBox
                checked={entry.value === option}
                key={option}
                onClick={createUpdateHandler(entry, option)}
              >
                {entry.formatter?.(option) ?? option}
              </MenuItemCheckBox>
            )
        )}

      {isManyOf(entry) &&
        entry.options.map(
          (option) =>
            isManyOf(entry) && (
              <MenuItemCheckBox
                checked={entry.value.includes(option)}
                key={option}
                onClick={createUpdateHandler(
                  entry,
                  toggleValueInArray(entry.value, option)
                )}
              >
                {entry.formatter?.(option) ?? option}
              </MenuItemCheckBox>
            )
        )}

      {isActions(entry) &&
        entry.actions.map((action) => (
          <MenuItemAction
            key={action.label}
            onClick={() => {
              action.onAction();
              onBack();
            }}
            title={action.label}
          />
        ))}

      {isRange(entry) && (
        <MenuItemRange
          value={entry.value}
          min={entry.min}
          max={entry.max}
          step={entry.step}
          onChange={entry.onChange}
          formatter={entry.formatter}
        />
      )}
    </Menu>
  );
};
