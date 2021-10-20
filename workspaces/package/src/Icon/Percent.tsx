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
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="percent_svg__feather percent_svg__feather-percent"><path d="M19 5L5 19" /><circle cx={6.5} cy={6.5} r={2.5} /><circle cx={17.5} cy={17.5} r={2.5} /></svg>}
    </Box>;
};

export default React.forwardRef(Icon);