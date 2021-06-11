import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';
import './Input.css';

export interface InputAddonProps extends BaseProps {}

const InputAddon: React.RefForwardingComponent<HTMLDivElement, Attributes<HTMLDivElement, InputAddonProps>> = (props, ref) => {
  const { padding, paddingHorizontal = 'x3' } = props;

  return (
    <Base { ...props }
        padding={ padding }
        paddingHorizontal={ padding || paddingHorizontal }
        ref={ ref } />
  );
};

export default React.forwardRef(InputAddon);
