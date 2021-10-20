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
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="upload-cloud_svg__feather upload-cloud_svg__feather-upload-cloud"><path d="M16 16l-4-4-4 4M12 12v9" /><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" /><path d="M16 16l-4-4-4 4" /></svg>}
    </Box>;
};

export default React.forwardRef(Icon);