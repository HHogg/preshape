import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

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
  return (
    <Box
      {...props}
      borderColor="background-shade-3"
      borderSize="x2"
      borderTop
      className="Modal__footer"
      grow
      ref={ref}
      shrink
    />
  );
};

export default forwardRef(ModalFooter);
