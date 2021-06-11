import * as React from 'react';
import { ModalContext } from './Modal';
import Base, { Attributes, BaseProps } from '../Base/Base';
import Icon from '../Icon/Icon';
import Link from '../Link/Link';

/**
 * THe header element of the Modal. Any children content
 * will be placed in the title area. If an onClose
 * callback is provided to the Modal component, then
 * the cross icon will appear in this element.
 */
export interface ModalHeaderProps extends BaseProps {
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
    <Base { ...rest }
        alignChildrenVertical="start"
        flex="horizontal"
        gap="x6"
        ref={ ref }>
      <Base grow shrink>
        { children }
      </Base>

      { onClose && (
        <Base>
          <Link onPointerUp={ onClose }>
            <Icon name="Cross" size={ closeIconSize } />
          </Link>
        </Base>
      ) }
    </Base>
  );
};

export default React.forwardRef(ModalHeader);
