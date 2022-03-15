import React, { forwardRef, RefForwardingComponent, useContext } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import { ModalContext } from './Modal';

/**
 * A component to offset the horizontal paddings of a Modal.
 */
export interface ModalPaddingOffsetProps extends BoxProps {}

const ModalPaddingOffset: RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, ModalPaddingOffsetProps>
> = (props, ref) => {
  const { paddingHorizontal } = useContext(ModalContext);

  return (
    <Box paddingOffsetHorizontal={paddingHorizontal} {...props} ref={ref} />
  );
};

export default forwardRef(ModalPaddingOffset);
