import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

/**
 * The body element of the Modal. This can be used as
 * the padded and scroll area (with use of the scrollable prop).
 * It should be placed directly under the ModalHeader component.
 */
export interface ModalBodyProps extends BaseProps {}

const ModalBody: React.RefForwardingComponent<HTMLDivElement, Attributes<HTMLDivElement, ModalBodyProps>> = (props, ref) => {
  return (
    <Base { ...props }
        flex="vertical"
        grow
        ref={ ref }
        shrink />
  );
};

export default React.forwardRef(ModalBody);
