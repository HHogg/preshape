import { forwardRef } from 'react';
import { Box as BoxC } from '../Box/Box';
import { Props as IconProps } from './index';
export const Chrome = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <BoxC {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="chrome_svg__feather chrome_svg__feather-chrome"><circle cx={12} cy={12} r={10} /><circle cx={12} cy={12} r={4} /><path d="M21.17 8H12M3.95 6.06L8.54 14M10.88 21.94L15.46 14" /></svg>}
    </BoxC>;
});