import { forwardRef } from 'react';
import { Appear } from '../Appear/Appear';
import { Box, BoxProps } from '../Box/Box';
import { ModalPaddingOffset } from './ModalPaddingOffset';
import { useModalContext } from './useModalContext';

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

export const ModalFooterInsert = forwardRef<any, ModalFooterInsertProps>(
  ({ children, visible, ...rest }, ref) => {
    const { paddingHorizontal, paddingVertical } = useModalContext();

    return (
      <Box
        {...rest}
        paddingOffsetTop={paddingVertical}
        paddingBottom={paddingVertical}
        ref={ref}
      >
        <Appear animation="Expand" visible={visible}>
          <ModalPaddingOffset
            borderBottom
            borderColor="background-shade-3"
            borderSize="x2"
            paddingBottom="x3"
            paddingTop="x3"
            paddingHorizontal={paddingHorizontal}
          >
            {children}
          </ModalPaddingOffset>
        </Appear>
      </Box>
    );
  }
);
