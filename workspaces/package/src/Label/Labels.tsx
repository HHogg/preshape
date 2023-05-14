import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';

/**
 * A wrapper component for Label components.
 */
export interface LabelsProps extends BoxProps {}

export const Labels = forwardRef<any, LabelsProps>((props, ref) => {
  return (
    <Box
      {...props}
      className="Labels"
      flex="horizontal"
      gap="x1"
      ref={ref}
      wrap
    />
  );
});
