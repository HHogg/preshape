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
          className="server_svg__feather server_svg__feather-server"
        >
          <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
          <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
          <path d="M6 6h.01M6 18h.01" />
        </svg>
      }
    </Box>
  );
};

export default React.forwardRef(Icon);
