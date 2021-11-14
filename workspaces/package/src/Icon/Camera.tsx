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
          className="camera_svg__feather camera_svg__feather-camera"
        >
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
          <circle cx={12} cy={13} r={4} />
        </svg>
      }
    </Box>
  );
};

export default forwardRef(Icon);
