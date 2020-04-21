import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';
import './Input.css';

export interface InputAddonProps extends FlexProps {}

const InputAddon: React.RefForwardingComponent<HTMLDivElement, Attributes<HTMLDivElement, InputAddonProps>> = (props, ref) => {
  const { padding, paddingHorizontal = 'x3' } = props;

  return (
    <Flex { ...props }
        padding={ padding }
        paddingHorizontal={ padding || paddingHorizontal }
        ref={ ref } />
  );
};

export default React.forwardRef(InputAddon);
