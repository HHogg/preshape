import React, { forwardRef } from 'react';
import Box, { BoxProps } from '../Box/Box';
import { useModalContext } from './Modal';

/**
 * A component to offset the horizontal paddings of a Modal.
 */
export interface ModalPaddingOffsetProps extends BoxProps {}

const ModalPaddingOffset: React.ForwardRefRenderFunction<
  any,
  ModalPaddingOffsetProps
> = (props, ref) => {
  const { paddingHorizontal } = useModalContext();

  return (
    <Box paddingOffsetHorizontal={paddingHorizontal} {...props} ref={ref} />
  );
};

export default forwardRef(ModalPaddingOffset);
