import { forwardRef } from 'react';
import { Box as BoxC } from '../Box/Box';
import { Props as IconProps } from './index';
export const Code = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <BoxC {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="code_svg__feather code_svg__feather-code"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>}
    </BoxC>;
});