import classNames from 'classnames';
import { forwardRef, ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Text, TextProps } from '../Text/Text';

export interface SelectInputLabelProps
  extends Omit<BoxProps, 'label' | 'size'> {
  label: ReactNode;
  size?: TextProps['size'];
}

export const SelectInputLabel = forwardRef<
  HTMLLabelElement,
  SelectInputLabelProps
>((props, ref) => {
  const {
    backgroundColor = 'background-shade-1',
    borderRadius = 'x2',
    borderSize = 'x2',
    children,
    className,
    label,
    size = 'x3',
    ...rest
  } = props;

  const classes = classNames('SelectInputLabels__label', className);

  return (
    <Box
      {...rest}
      alignChildrenVertical="middle"
      backgroundColor={backgroundColor}
      borderSize={borderSize}
      borderRadius={borderRadius}
      className={classes}
      flex="horizontal"
      gap="x2"
      ref={ref}
      tag="label"
    >
      <Box>{children}</Box>

      <Box grow minWidth="0" shrink>
        <Text className="SelectInputLabels__label-text" size={size} weight="x2">
          {label}
        </Text>
      </Box>
    </Box>
  );
});
