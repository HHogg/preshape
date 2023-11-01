import { forwardRef } from 'react';
import { Text, TextProps } from '../Text/Text';
import { sizeX3Px } from '../variables';
import './Label.css';

/**
 * Label component to be used for displaying text in a
 * pill-like format.
 */
export interface LabelProps extends TextProps {}

export const Label = forwardRef<HTMLDivElement, LabelProps>((props, ref) => {
  const {
    backgroundColor = 'text-shade-1',
    borderRadius = sizeX3Px,
    paddingHorizontal = 'x2',
    paddingVertical = 'x1',
    size = 'x2',
    textColor = 'background-shade-1',
    ...rest
  } = props;

  return (
    <Text
      {...rest}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      className="Label"
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      ref={ref}
      size={size}
      tag="div"
      textColor={textColor}
      weight="x2"
    />
  );
});
