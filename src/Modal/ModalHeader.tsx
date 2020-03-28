import * as React from 'react';
import { ModalContext } from './Modal';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';

/**
 * THe header element of the Modal. Any children content
 * will be placed in the title area. If an onClose
 * callback is provided to the Modal component, then
 * the cross icon will appear in this element.
 */
export interface ModalHeaderProps extends FlexProps {
  /**
   * Size of the close icon that is used to trigger
   * the onClose callback.
   */
  closeIconSize?: string;
}

const ModalHeader: React.RefForwardingComponent<HTMLDivElement, Attributes<HTMLDivElement, ModalHeaderProps>> = (props, ref) => {
  const { children, closeIconSize = '1.5rem', ...rest } = props;
  const { onClose } = React.useContext(ModalContext);

  return (
    <Flex { ...rest }
        alignChildrenVertical="start"
        direction="horizontal"
        gap="x6"
        ref={ ref }>
      <Flex grow shrink>
        { children }
      </Flex>

      { onClose && (
        <Flex>
          <Link onPointerUp={ onClose }>
            <Icon name="Cross" size={ closeIconSize } />
          </Link>
        </Flex>
      ) }
    </Flex>
  );
};

export default React.forwardRef(ModalHeader);
