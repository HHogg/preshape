import { forwardRef } from 'react';
import { Box as BoxC } from '../Box/Box';
import { Props as IconProps } from './index';
export const Airplay = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <BoxC {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="airplay_svg__feather airplay_svg__feather-airplay"><path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" /><path d="M12 15l5 6H7l5-6z" /></svg>}
    </BoxC>;
});