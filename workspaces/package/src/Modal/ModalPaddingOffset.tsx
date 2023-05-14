import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { useModalContext } from './useModalContext';

/**
 * A component to offset the horizontal paddings of a Modal.
 */
export interface ModalPaddingOffsetProps extends BoxProps {}

export const ModalPaddingOffset = forwardRef<any, ModalPaddingOffsetProps>(
  (props, ref) => {
    const { paddingHorizontal } = useModalContext();

    return (
      <Box paddingOffsetHorizontal={paddingHorizontal} {...props} ref={ref} />
    );
  }
);
