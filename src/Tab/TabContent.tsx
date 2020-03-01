import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';

export interface TabContentProps extends FlexProps {}

const TabContent: React.RefForwardingComponent<HTMLElement, Attributes<HTMLElement, TabContentProps>> = (props, ref) => {
  const {
    backgroundColor = 'background-shade-1',
    ...rest
  } = props;

  return (
    <Flex { ...rest }
        backgroundColor={ backgroundColor }
        className="TabContent"
        ref={ ref } />
  );
};

export default React.forwardRef(TabContent);
