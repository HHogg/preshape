import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';

export interface TabContentProps extends FlexProps {}

const TabContent: React.RefForwardingComponent<HTMLElement, Attributes<HTMLElement, TabContentProps>> = (props, ref) => {
  return (
    <Flex { ...props }
        className="TabContent"
        ref={ ref } />
  );
};

export default React.forwardRef(TabContent);
