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
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="user-x_svg__feather user-x_svg__feather-user-x"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx={8.5} cy={7} r={4} /><path d="M18 8l5 5M23 8l-5 5" /></svg>}
    </Box>;
};

export default forwardRef(Icon);