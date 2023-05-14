import { forwardRef } from 'react';
import { Box as BoxC } from '../Box/Box';
import { Props as IconProps } from './index';
export const GitCommit = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <BoxC {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="git-commit_svg__feather git-commit_svg__feather-git-commit"><circle cx={12} cy={12} r={4} /><path d="M1.05 12H7M17.01 12h5.95" /></svg>}
    </BoxC>;
});