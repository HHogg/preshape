import React from 'react';
import Appear from '../Appear/Appear';
import Box, { Attributes, BoxProps } from '../Box/Box';
import { useModalContext } from './Modal';
import ModalPaddingOffset from './ModalPaddingOffset';

export interface ModalFooterInsertProps extends BoxProps {
  visible?: boolean;
}

const ModalFooterInsert = ({
  children,
  visible,
  ...rest
}: Attributes<HTMLDivElement, ModalFooterInsertProps>) => {
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
