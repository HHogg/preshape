import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

export interface BulletPointProps extends BoxProps {}

const BulletPoint: RefForwardingComponent<
  HTMLLIElement,
  Attributes<HTMLLIElement, BulletPointProps>
> = (props, ref) => {
  const { children, ...rest } = props;

  return (
    <Box {...rest} className="BulletPoints__point" ref={ref} tag="li">
      <Box className="BulletPoints__point-content">{children}</Box>
    </Box>
  );
};

export default forwardRef(BulletPoint);
