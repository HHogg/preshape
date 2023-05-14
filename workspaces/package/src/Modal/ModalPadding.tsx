import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { useModalContext } from './useModalContext';

/**
 * A component apply paddings of a Modal.
 */
export interface ModalPaddingProps extends BoxProps {
  /**
   * Whether or not to apply padding to the top of the Modal.
   *
   * @default true
   */
  top?: boolean;
  /**
   * Whether or not to apply padding to the bottom of the Modal.
   *
   * @default true
   */
  bottom?: boolean;
  /**
   * Whether or not to apply padding to the left of the Modal.
   *
   * @default true
   */
  left?: boolean;
  /**
   * Whether or not to apply padding to the right of the Modal.
   *
   * @default true
   */
  right?: boolean;
}

export const ModalPadding = forwardRef<any, ModalPaddingProps>((props, ref) => {
  const {
    top = true,
    bottom = true,
    left = true,
    right = true,
    ...rest
  } = props;
  const { paddingHorizontal, paddingVertical } = useModalContext();

  return (
    <Box
      {...rest}
      paddingLeft={left ? paddingHorizontal : undefined}
      paddingRight={right ? paddingHorizontal : undefined}
      paddingTop={top ? paddingVertical : undefined}
      paddingBottom={bottom ? paddingVertical : undefined}
    />
  );
});
