import * as React from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import './Image.css';

export interface ImageProps extends BoxProps {}

const Image: React.RefForwardingComponent<
  HTMLImageElement,
  Attributes<HTMLImageElement, ImageProps>
> = (props, ref) => {
  return <Box {...props} className="Image" ref={ref} tag="img" />;
};

export default React.forwardRef(Image);
