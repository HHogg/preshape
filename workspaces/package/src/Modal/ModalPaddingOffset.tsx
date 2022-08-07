import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import { useModalContext } from './Modal';

/**
 * A component to offset the horizontal paddings of a Modal.
 */
export interface ModalPaddingOffsetProps extends BoxProps {}

const ModalPaddingOffset: RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, ModalPaddingOffsetProps>
> = (props, ref) => {
  const { paddingHorizontal } = useModalContext();

  return (
    <Box paddingOffsetHorizontal={paddingHorizontal} {...props} ref={ref} />
  );
};

export default forwardRef(ModalPaddingOffset);
