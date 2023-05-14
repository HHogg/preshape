import React, { forwardRef } from 'react';
import Box, { BoxProps } from '../Box/Box';
import './Image.css';

export interface ImageProps extends BoxProps {}

const Image: React.ForwardRefRenderFunction<HTMLImageElement, ImageProps> = (
  props,
  ref
) => {
  return <Box {...props} className="Image" ref={ref} tag="img" />;
};

export default forwardRef(Image);
