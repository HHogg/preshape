import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import './SelectInputLabels.css';

export interface SelectInputLabelsProps extends BoxProps {}

export const SelectInputLabels = forwardRef<any, SelectInputLabelsProps>(
  (props, ref) => {
    return (
      <Box
        {...props}
        borderRadius="x2"
        className="SelectInputLabels"
        ref={ref}
      />
    );
  }
);
