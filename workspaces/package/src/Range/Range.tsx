import * as React from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import './Range.css';

export interface RangeProps extends BoxProps {}

const Range: React.RefForwardingComponent<HTMLInputElement, Attributes<HTMLInputElement, RangeProps>> = (props, ref) => {
  const {
    padding,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  return (
    <Box { ...rest }
        basis="0"
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
