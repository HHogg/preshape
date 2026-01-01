import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Range, RangeProps } from '../Range/Range';
import { Text } from '../Text/Text';
import { formatValue } from './utils';

type MenuItemRangeProps = BoxProps &
  RangeProps<any> & {
    formatter?: (value: any) => string;
  };

export default function MenuItemRange({
  children,
  addonEnd,
  addonStart,
  min,
  max,
  step,
  value,
  formatter,
  onChange,
  ...rest
}: PropsWithChildren<MenuItemRangeProps>) {
  const isDoubleRange = Array.isArray(value);

  const minLabel = formatValue(min, formatter);
  const maxLabel = formatValue(max, formatter);
  const biggestLabel = minLabel.length > maxLabel.length ? minLabel : maxLabel;

  return (
    <Box {...rest} paddingHorizontal="x4" paddingVertical="x2">
      <Range
        addonEnd={
          isDoubleRange ? (
            <Text container size="x3">
              <Box style={{ opacity: 0, pointerEvents: 'none' }}>
                {biggestLabel}
              </Box>
              <Box absolute="center">{formatValue(value[1], formatter)}</Box>
            </Text>
          ) : undefined
        }
        addonStart={
          isDoubleRange ? (
            <Text container size="x3">
              <Box style={{ opacity: 0, pointerEvents: 'none' }}>
                {biggestLabel}
              </Box>
              <Box absolute="center">{formatValue(value[0], formatter)}</Box>
            </Text>
          ) : undefined
        }
        borderColor="transparent"
        borderSize="x0"
        textColor="text-shade-1"
        textColorHover="text-shade-1"
        textColorActive="text-shade-1"
        trackColor="background-shade-4"
        trackFillColor="text-shade-1"
        thumbColor="text-shade-1"
        paddingHorizontal="x0"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />

      {!isDoubleRange && (
        <Text align="middle" size="x3">
          {formatValue(value, formatter)}
        </Text>
      )}
    </Box>
  );
}
