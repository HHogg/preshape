import React, { forwardRef } from 'react';
import Text, { TextProps } from '../Text/Text';

/**
 * The title element of the Modal.
 */
export interface ModalTitleProps extends TextProps {}

const ModalTitle: React.ForwardRefRenderFunction<any, ModalTitleProps> = (
  props,
  ref
) => {
  return <Text {...props} size="x4" strong ref={ref} />;
};

export default forwardRef(ModalTitle);
