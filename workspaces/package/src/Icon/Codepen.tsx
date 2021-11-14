import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

const Icon: RefForwardingComponent<SVGSVGElement, Attributes<Omit<SVGSVGElement, 'display'>, BoxProps & {
  size?: string;
}>> = (props, ref) => {
  const {
    size = '1rem',
    ...rest
  } = props;
  return <Box {...rest} className="Icon" height={size} ref={ref} tag="svg" viewBox="0 0 24 24" width={size}>
      {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="codepen_svg__feather codepen_svg__feather-codepen"><path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" /><path d="M22 8.5l-10 7-10-7" /><path d="M2 15.5l10-7 10 7M12 2v6.5" /></svg>}
    </Box>;
};

export default forwardRef(Icon);