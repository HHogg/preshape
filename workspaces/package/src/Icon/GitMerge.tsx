import React, { forwardRef } from 'react';
import Box from '../Box/Box';
import { Props as IconProps } from './index';

const Icon: React.ForwardRefRenderFunction<SVGSVGElement, IconProps> = (props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <Box {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="git-merge_svg__feather git-merge_svg__feather-git-merge"><circle cx={18} cy={18} r={3} /><circle cx={6} cy={6} r={3} /><path d="M6 21V9a9 9 0 009 9" /></svg>}
    </Box>;
};

export default forwardRef(Icon);