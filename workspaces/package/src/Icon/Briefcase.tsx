import { forwardRef } from 'react';
import { Box as BoxC } from '../Box/Box';
import { Props as IconProps } from './index';
export const Briefcase = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <BoxC {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="briefcase_svg__feather briefcase_svg__feather-briefcase"><rect x={2} y={7} width={20} height={14} rx={2} ry={2} /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>}
    </BoxC>;
});