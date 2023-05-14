import React, { forwardRef } from 'react';
import Box, { BoxProps } from '../Box/Box';

/**
 * The child component of BulletPoints to be used for each point.
 */
export interface BulletPointProps extends BoxProps {}

const BulletPoint: React.ForwardRefRenderFunction<
  HTMLLIElement,
  BulletPointProps
> = (props, ref) => {
  const { children, ...rest } = props;

  return (
    <Box {...rest} className="BulletPoints__point" ref={ref} tag="li">
      <Box className="BulletPoints__point-content">{children}</Box>
    </Box>
  );
};

export default forwardRef(BulletPoint);
