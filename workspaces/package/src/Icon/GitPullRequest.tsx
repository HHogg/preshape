import { forwardRef } from 'react';
import { Box as BoxC } from '../Box/Box';
import { Props as IconProps } from './index';
export const GitPullRequest = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <BoxC {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="git-pull-request_svg__feather git-pull-request_svg__feather-git-pull-request"><circle cx={18} cy={18} r={3} /><circle cx={6} cy={6} r={3} /><path d="M13 6h3a2 2 0 012 2v7M6 9v12" /></svg>}
    </BoxC>;
});