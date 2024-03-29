import classNames from 'classnames';
import { forwardRef, ReactNode } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Text } from '../Text/Text';

export interface SelectInputLabelProps extends Omit<BoxProps, 'label'> {
  label: ReactNode;
}

export const SelectInputLabel = forwardRef<
  HTMLLabelElement,
  SelectInputLabelProps
>((props, ref) => {
  const {
    borderRadius = 'x2',
    borderSize = 'x2',
    children,
    className,
    label,
    ...rest
  } = props;

  const classes = classNames('SelectInputLabels__label', className);

  return (
    <Box
      {...rest}
      alignChildrenVertical="middle"
      backgroundColor="background-shade-1"
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
        <Text className="SelectInputLabels__label-text" size="x3" weight="x2">
          {label}
        </Text>
      </Box>
    </Box>
  );
});
