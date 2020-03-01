import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';

/**
 * The body element of the Modal. This can be used as
 * the padded and scroll area (with use of the scrollable prop).
 * It should be placed directly under the ModalHeader component.
 */
export interface ModalBodyProps extends FlexProps {}

const ModalBody: React.RefForwardingComponent<HTMLDivElement, Attributes<HTMLDivElement, ModalBodyProps>> = (props, ref) => {
  return (
    <Flex { ...props }
        direction="vertical"
        grow
        ref={ ref }
        shrink />
  );
};

export default React.forwardRef(ModalBody);
