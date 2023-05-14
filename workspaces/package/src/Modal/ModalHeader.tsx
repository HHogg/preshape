import React, { forwardRef, PointerEvent } from 'react';
import { useModalContext } from './Modal';
import Box, { BoxProps } from '../Box/Box';
import * as Icons from '../Icon';
import Link from '../Link/Link';
import classNames from 'classnames';

/**
 * The header element of the Modal. Any children content
 * will be placed in the title area. If an onClose
 * callback is provided to the Modal component, then
 * the cross icon will appear in this element.
 */
export interface ModalHeaderProps extends BoxProps {
  /**
   * Size of the close icon that is used to trigger
   * the onClose callback.
   */
  closeIconSize?: string;
}

const ModalHeader: React.ForwardRefRenderFunction<any, ModalHeaderProps> = (
  props,
  ref
) => {
  const { children, closeIconSize = '24px', sticky, ...rest } = props;
  const { onClose, paddingHorizontal, paddingVertical } = useModalContext();

  const handleCloseClick = (event: PointerEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
    onClose?.(event);
  };

  return (
    <Box
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      {...rest}
      alignChildrenVertical="start"
      borderBottom
      borderColor="background-shade-3"
      borderSize="x2"
      className="Modal__header"
      flex="horizontal"
      gap="x6"
      ref={ref}
    >
      <Box grow shrink>
        {children}
      </Box>

      {onClose && (
        <Box>
          <Link onClick={handleCloseClick}>
            <Icons.X size={closeIconSize} />
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default forwardRef(ModalHeader);
