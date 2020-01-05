import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';
import './Tabs.css';

export interface TabsProps extends FlexProps {}

const Tabs = React.forwardRef<HTMLElement, Attributes<HTMLElement, TabsProps>>((props, ref) => {
  return (
    <Flex { ...props } className="Tabs" ref={ ref } />
  );
});

export default Tabs;
