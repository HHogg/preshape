import React from 'react';
import Appear from '../Appear/Appear';
import Box, { BoxProps } from '../Box/Box';
import { useModalContext } from './Modal';
import ModalPaddingOffset from './ModalPaddingOffset';

/**
 * A footer insert component that can be used inside a ModalFooter,
 * and can be animated in and out.
 */
export interface ModalFooterInsertProps extends BoxProps {
  /**
   * Flag to toggle the visibility of the footer section.
   */
  visible?: boolean;
}

const ModalFooterInsert: React.ForwardRefRenderFunction<
  any,
  ModalFooterInsertProps
> = ({ children, visible, ...rest }, ref) => {
  const { paddingHorizontal, paddingVertical } = useModalContext();

  return (
    <Box
      {...rest}
      paddingOffsetTop={paddingVertical}
      paddingBottom={paddingVertical}
    >
      <Appear animation="Expand" visible={visible}>
        <ModalPaddingOffset
          borderBottom
          borderColor="background-shade-3"
          borderSize="x2"
          paddingBottom="x3" // TODO(hhogg): This should be half of `paddingVertical`
          paddingTop="x3" // TODO(hhogg): This should be half of `paddingVertical`
          paddingHorizontal={paddingHorizontal}
        >
          {children}
        </ModalPaddingOffset>
      </Appear>
    </Box>
  );
};

export default ModalFooterInsert;
