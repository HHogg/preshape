import classNames from 'classnames';
import { XIcon } from 'lucide-react';
import { forwardRef, PointerEvent } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Link } from '../Link/Link';
import { useModalContext } from './useModalContext';

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
  /**
   * Flag to toggle the stickiness of the header so it
   * remains visible when the ModalBody is scrolled.
   */
  sticky?: boolean;
}

export const ModalHeader = forwardRef<any, ModalHeaderProps>((props, ref) => {
  const { children, closeIconSize = '24px', sticky, ...rest } = props;
  const { onClose, paddingHorizontal, paddingVertical } = useModalContext();
  const classes = classNames('Modal__header', {
    'Modal__header--sticky': sticky,
  });

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
      className={classes}
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
            <XIcon size={closeIconSize} />
          </Link>
        </Box>
      )}
    </Box>
  );
});
