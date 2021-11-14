import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

const Icon: RefForwardingComponent<SVGSVGElement, Attributes<Omit<SVGSVGElement, 'display'>, BoxProps & {
  size?: string;
}>> = (props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <Box {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="cloud-lightning_svg__feather cloud-lightning_svg__feather-cloud-lightning"><path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" /><path d="M13 11l-4 6h6l-4 6" /></svg>}
    </Box>;
};

export default forwardRef(Icon);