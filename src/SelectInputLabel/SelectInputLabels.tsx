import * as React from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import './SelectInputLabels.css';

export interface SelectInputLabelsProps extends BoxProps {

}

const BulletPoints: React.RefForwardingComponent<HTMLDivElement, Attributes<HTMLDivElement, SelectInputLabelsProps>> = (props, ref) => {
  return (
    <Box { ...props }
        className="SelectInputLabels"
        ref={ ref } />
  );
};

export default React.forwardRef(BulletPoints);
