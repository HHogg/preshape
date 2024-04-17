import classNames from 'classnames';
import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { useModalContext } from './useModalContext';

/**
 * The footer element of the Modal. This can be used as
 * for button and other action elements.
 * It should be placed directly under the ModalBody component.
 */
export interface ModalFooterProps extends BoxProps {
  /**
   * Flag to toggle the stickiness of the header so it
   * remains visible when the ModalBody is scrolled.
   */
  sticky?: boolean;
}

export const ModalFooter = forwardRef<any, ModalFooterProps>(
  ({ sticky, ...props }, ref) => {
    const { borderColor, borderSize, paddingHorizontal, paddingVertical } =
      useModalContext();
    const classes = classNames('Modal__footer', {
      'Modal__footer--sticky': sticky,
    });

    return (
      <Box
        borderColor={borderColor}
        borderSize={borderSize}
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
        {...props}
        borderTop
        className={classes}
        ref={ref}
      />
    );
  }
);
