import { forwardRef } from 'react';
import { Text, TextProps } from '../Text/Text';

/**
 * The title element of the Modal.
 */
export interface ModalTitleProps extends TextProps {}

export const ModalTitle = forwardRef<any, ModalTitleProps>((props, ref) => {
  return <Text {...props} size="x4" strong ref={ref} />;
});
