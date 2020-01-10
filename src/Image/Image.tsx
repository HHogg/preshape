import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';
import './Image.css';

export interface ImageProps extends BaseProps {}

const Image: React.RefForwardingComponent<HTMLImageElement, Attributes<HTMLImageElement, ImageProps>> = (props, ref) => {
  return (
    <Base { ...props }
        className="Image"
        ref={ ref }
        tag="img" />
  );
};

export default React.forwardRef(Image);
