import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

/**
 * The body element of the Modal. This can be used as
 * the padded and scroll area (with use of the scrollable prop).
 * It should be placed directly under the ModalHeader component.
 */
export interface ModalBodyProps extends BoxProps {}

const ModalBody: RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, ModalBodyProps>
> = (props, ref) => {
  return (
    <Box
      {...props}
      className="Modal__body"
      flex="vertical"
      grow
      ref={ref}
      shrink
    />
  );
};

export default forwardRef(ModalBody);
