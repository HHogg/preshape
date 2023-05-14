import React, { forwardRef } from 'react';
import Box from '../Box/Box';
import { Props as IconProps } from './index';

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = (props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <Box {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="rotate-cw_svg__feather rotate-cw_svg__feather-rotate-cw"><path d="M23 4v6h-6" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" /></svg>}
    </Box>;
};

export default forwardRef(Icon);