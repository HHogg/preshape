import * as React from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';

const Icon: React.RefForwardingComponent<
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
          className="wifi-off_svg__feather wifi-off_svg__feather-wifi-off"
        >
          <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.58 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
        </svg>
      }
    </Box>
  );
};

export default React.forwardRef(Icon);
