import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import './Image.css';

export interface ImageProps extends BoxProps {}

const Image: RefForwardingComponent<
  HTMLImageElement,
  Attributes<HTMLImageElement, ImageProps>
> = (props, ref) => {
  return <Box {...props} className="Image" ref={ref} tag="img" />;
};

export default forwardRef(Image);
