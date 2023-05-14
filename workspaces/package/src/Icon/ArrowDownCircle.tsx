import { forwardRef } from 'react';
import { Box as BoxC } from '../Box/Box';
import { Props as IconProps } from './index';
export const ArrowDownCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <BoxC {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="arrow-down-circle_svg__feather arrow-down-circle_svg__feather-arrow-down-circle"><circle cx={12} cy={12} r={10} /><path d="M8 12l4 4 4-4M12 8v8" /></svg>}
    </BoxC>;
});