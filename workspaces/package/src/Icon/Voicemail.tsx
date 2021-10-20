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
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="voicemail_svg__feather voicemail_svg__feather-voicemail"><circle cx={5.5} cy={11.5} r={4.5} /><circle cx={18.5} cy={11.5} r={4.5} /><path d="M5.5 16h13" /></svg>}
    </Box>;
};

export default React.forwardRef(Icon);