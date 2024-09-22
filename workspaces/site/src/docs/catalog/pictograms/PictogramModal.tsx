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
          <title>{'pictogram-modal'}</title>
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <rect
              fill="var(--color-text-shade-1)"
              x={4}
              y={4}
              width={240}
              height={88}
              rx={8}
            />
            <polygon
              fill="var(--color-background-shade-1)"
              points="4 28 244 28 244 30 4 30"
            />
            <g
              transform="translate(231.000000, 16.000000) rotate(45.000000) translate(-231.000000, -16.000000) translate(225.000000, 10.000000)"
              fill="var(--color-accent-shade-4)"
            >
              <rect x={4.8} y={0} width={2.4} height={12} rx={0.5} />
              <rect x={0} y={4.8} width={12} height={2.4} rx={0.5} />
            </g>
            <path
              d="M14,14 L74,14 C75.1045695,14 76,14.8954305 76,16 C76,17.1045695 75.1045695,18 74,18 L14,18 C12.8954305,18 12,17.1045695 12,16 C12,14.8954305 12.8954305,14 14,14 Z"
              fill="var(--color-background-shade-1)"
            />
            <rect
              fill="var(--color-background-shade-1)"
              x={12}
              y={48}
              width={167}
              height={4}
              rx={2}
            />
            <rect
              fill="var(--color-background-shade-1)"
              x={12}
              y={64}
              width={140}
              height={4}
              rx={2}
            />
            <rect
              fill="var(--color-background-shade-1)"
              x={12}
              y={56}
              width={123}
              height={4}
              rx={2}
            />
            <rect
              fill="var(--color-background-shade-1)"
              x={12}
              y={72}
              width={123}
              height={4}
              rx={2}
            />
          </g>
        </svg>
      }
    </Box>
  );
});
