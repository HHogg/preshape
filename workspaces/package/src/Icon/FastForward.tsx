import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

const Icon: RefForwardingComponent<
  SVGSVGElement,
  Attributes<
    Omit<SVGSVGElement, 'display'>,
    BoxProps & {
      size?: string;
    }
  >
> = (props, ref) => {
  const { size = '1rem', ...rest } = props;
  return (
    <Box
      {...rest}
      className="Icon"
      height={size}
      ref={ref}
      tag="svg"
      viewBox="0 0 24 24"
      width={size}
    >
      {
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="fast-forward_svg__feather fast-forward_svg__feather-fast-forward"
        >
          <path d="M13 19l9-7-9-7v14zM2 19l9-7-9-7v14z" />
        </svg>
      }
    </Box>
  );
};

export default forwardRef(Icon);
