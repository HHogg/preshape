import React, { forwardRef } from 'react';
import Box from '../Box/Box';
import { Props as IconProps } from './index';

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = (props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <Box {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="arrow-up-circle_svg__feather arrow-up-circle_svg__feather-arrow-up-circle"><circle cx={12} cy={12} r={10} /><path d="M16 12l-4-4-4 4M12 16V8" /></svg>}
    </Box>;
};

export default forwardRef(Icon);