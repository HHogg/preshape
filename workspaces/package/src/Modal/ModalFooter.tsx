import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import { useModalContext } from './Modal';

/**
 * The footer element of the Modal. This can be used as
 * for button and other action elements.
 * It should be placed directly under the ModalBody component.
 */
export interface ModalFooterProps extends BoxProps {}

const ModalFooter: RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, ModalFooterProps>
> = (props, ref) => {
  const { paddingHorizontal, paddingVertical } = useModalContext();

  return (
    <Box
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      {...props}
      borderColor="background-shade-3"
      borderSize="x2"
      borderTop
      className="Modal__footer"
      ref={ref}
    />
  );
};

export default forwardRef(ModalFooter);
