import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { useModalContext } from './useModalContext';

/**
 * The body element of the Modal. This can be used as
 * the padded and scroll area (with use of the scrollable prop).
 * It should be placed directly under the ModalHeader component.
 */
export interface ModalBodyProps extends BoxProps {}

export const ModalBody = forwardRef<any, ModalBodyProps>((props, ref) => {
  const { paddingHorizontal, paddingVertical } = useModalContext();

  return (
    <Box
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      {...props}
      className="Modal__body"
      flex="vertical"
      grow
      ref={ref}
      shrink
    />
  );
});
