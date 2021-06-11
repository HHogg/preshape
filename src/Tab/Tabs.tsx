import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';
import './Tabs.css';

export interface TabsProps extends BaseProps {}

const Tabs: React.RefForwardingComponent<HTMLElement, Attributes<HTMLElement, TabsProps>> = (props, ref) => {
  return (
    <Base { ...props } className="Tabs" ref={ ref } />
  );
};

export default React.forwardRef(Tabs);
