import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';
import './Range.css';

export interface RangeProps extends FlexProps {}

const Range: React.RefForwardingComponent<HTMLInputElement, Attributes<HTMLInputElement, RangeProps>> = (props, ref) => {
  const {
    padding,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  return (
    <Flex { ...rest }
        basis="none"
        className="Range"
        grow
        paddingHorizontal={ padding || paddingHorizontal }
        paddingVertical={ padding || paddingVertical }
        ref={ ref }
        tag="input"
        type="range" />
  );
};

export default React.forwardRef(Range);
