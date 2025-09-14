import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import './SelectInputLabels.css';

export interface SelectInputLabelsProps extends BoxProps {}

export const SelectInputLabels = forwardRef<any, SelectInputLabelsProps>(
  (props, ref) => {
    return (
      <Box
        backgroundColor="background-shade-1"
        borderSize="x2"
        borderRadius="x2"
        {...props}
        className="SelectInputLabels"
        ref={ref}
      />
    );
  }
);
