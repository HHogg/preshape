import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface TabContentProps extends BaseProps {}

const TabContent: React.RefForwardingComponent<HTMLElement, Attributes<HTMLElement, TabContentProps>> = (props, ref) => {
  const {
    backgroundColor = 'background-shade-1',
    ...rest
  } = props;

  return (
    <Base { ...rest }
        backgroundColor={ backgroundColor }
        className="TabContent"
        ref={ ref } />
  );
};

export default React.forwardRef(TabContent);
