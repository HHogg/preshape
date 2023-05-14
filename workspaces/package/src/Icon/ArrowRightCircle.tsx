import React, { forwardRef } from 'react';
import Box from '../Box/Box';
import { Props as IconProps } from './index';

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = (props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <Box {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="arrow-right-circle_svg__feather arrow-right-circle_svg__feather-arrow-right-circle"><circle cx={12} cy={12} r={10} /><path d="M12 16l4-4-4-4M8 12h8" /></svg>}
    </Box>;
};

export default forwardRef(Icon);