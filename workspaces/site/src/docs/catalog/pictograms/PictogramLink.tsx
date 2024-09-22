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
          <title>{'pictogram-link'}</title>
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <rect
              fill="var(--color-text-shade-1)"
              x={24}
              y={28}
              width={200}
              height={24}
              rx={6}
            />
            <rect
              fill="var(--color-accent-shade-4)"
              x={24}
              y={56}
              width={200}
              height={4}
              rx={2}
            />
          </g>
        </svg>
      }
    </Box>
  );
});
