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
          <title>{'pictogram-checkbox'}</title>
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <g transform="translate(4.000000, 30.000000)">
              <rect
                fill="var(--color-text-shade-1)"
                x={0}
                y={0}
                width={240}
                height={40}
                rx={8}
              />
              <rect
                fill="var(--color-background-shade-1)"
                x={12}
                y={10}
                width={20}
                height={20}
                rx={4}
              />
              <rect
                fill="var(--color-accent-shade-4)"
                x={18}
                y={16}
                width={8}
                height={8}
                rx={2}
              />
              <rect
                fill="var(--color-background-shade-1)"
                x={44}
                y={16}
                width={168}
                height={8}
                rx={4}
              />
            </g>
          </g>
        </svg>
      }
    </Box>
  );
});
