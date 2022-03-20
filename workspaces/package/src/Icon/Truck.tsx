import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

const Icon: RefForwardingComponent<SVGSVGElement, Attributes<Omit<SVGSVGElement, 'display'>, BoxProps & {
  size?: string | number;
}>> = (props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <Box {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="truck_svg__feather truck_svg__feather-truck"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" /><circle cx={5.5} cy={18.5} r={2.5} /><circle cx={18.5} cy={18.5} r={2.5} /></svg>}
    </Box>;
};

export default forwardRef(Icon);