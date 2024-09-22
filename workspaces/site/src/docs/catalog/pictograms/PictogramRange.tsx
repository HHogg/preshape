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
          <title>{'pictogram-range'}</title>
          <desc>{'Created with Sketch.'}</desc>
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <path
              d="M26,44 L221,44 C221.552285,44 222,44.4477153 222,45 L222,51 C222,51.5522847 221.552285,52 221,52 L26,52 C25.4477153,52 25,51.5522847 25,51 L25,45 C25,44.4477153 25.4477153,44 26,44 Z"
              fill="var(--color-text-shade-1)"
            />
            <circle
              fill="var(--color-accent-shade-4)"
              cx={124}
              cy={48}
              r={12}
            />
          </g>
        </svg>
      }
    </Box>
  );
});
