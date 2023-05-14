import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import './Image.css';

export interface ImageProps extends BoxProps {}

export const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  return <Box {...props} className="Image" ref={ref} tag="img" />;
});
