/** AUTO GENERATED **/
import { Box, BoxProps } from 'preshape';
import { forwardRef } from 'react';
export const Pictogram = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return (
    <Box
      {...props}
      className="Pictogram"
      ref={ref}
      tag="svg"
      viewBox="0 0 248 96"
    >
      {
        <svg
          viewBox="0 0 248 96"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          {...props}
        >
          <title>{'pictogram-base'}</title>
          <g
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
            strokeDasharray={4}
          >
            <path
              d="M40,24 L208,24 C212.418278,24 216,27.581722 216,32 L216,64 C216,68.418278 212.418278,72 208,72 L40,72 C35.581722,72 32,68.418278 32,64 L32,32 C32,27.581722 35.581722,24 40,24 Z"
              stroke="var(--color-text-shade-1)"
              strokeWidth={2}
            />
          </g>
        </svg>
      }
    </Box>
  );
});
