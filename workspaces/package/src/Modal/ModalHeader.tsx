import * as React from 'react';
import { ModalContext } from './Modal';
import Box, { Attributes, BoxProps } from '../Box/Box';
import * as Icons from '../Icon';
import Link from '../Link/Link';

/**
 * THe header element of the Modal. Any children content
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

const ModalHeader: React.RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, ModalHeaderProps>
> = (props, ref) => {
  const { children, closeIconSize = '24px', ...rest } = props;
  const { onClose } = React.useContext(ModalContext);

  return (
    <Box
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
          <Link onPointerUp={onClose}>
            <Icons.X size={closeIconSize} />
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default React.forwardRef(ModalHeader);
