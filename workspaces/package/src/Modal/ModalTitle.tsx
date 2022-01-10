import React, { forwardRef, RefForwardingComponent } from 'react';
import { Attributes } from '../Box/Box';
import Text, { TextProps } from '../Text/Text';

/**
 * The title element of the Modal.
 */
export interface ModalTitleProps extends TextProps {}

const ModalTitle: RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, ModalTitleProps>
> = (props, ref) => {
  return (
    <Text
      {...props}
      size="x4"
      strong
      ref={ref}
    />
  );
};

export default forwardRef(ModalTitle);
