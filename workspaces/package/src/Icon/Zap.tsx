import * as React from 'react';
import { Attributes, Box, BoxProps } from 'preshape';

const Icon: React.RefForwardingComponent<SVGSVGElement, Attributes<Omit<SVGSVGElement, 'display'>, BoxProps & {
  size?: string;
}>> = (props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <Box {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="zap_svg__feather zap_svg__feather-zap"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>}
    </Box>;
};

export default React.forwardRef(Icon);