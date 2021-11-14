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
          className="pen-tool_svg__feather pen-tool_svg__feather-pen-tool"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" />
          <circle cx={11} cy={11} r={2} />
        </svg>
      }
    </Box>
  );
};

export default forwardRef(Icon);
