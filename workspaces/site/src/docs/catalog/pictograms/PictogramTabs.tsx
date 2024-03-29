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
        <svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}>
          <g
            id="pictogram-tabs_svg__pictogram-tabs"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <rect
              id="pictogram-tabs_svg__Rectangle"
              fill="var(--color-text-shade-1)"
              x={8}
              y={34}
              width={72}
              height={48}
              rx={6}
            />
            <path
              d="M90 24h60a6 6 0 016 6v42H84V30a6 6 0 016-6z"
              id="pictogram-tabs_svg__Rectangle-Copy"
              fill="var(--color-text-shade-1)"
            />
            <rect
              id="pictogram-tabs_svg__Rectangle-Copy-5"
              fill="var(--color-text-shade-1)"
              x={160}
              y={35}
              width={72}
              height={48}
              rx={6}
            />
            <rect
              id="pictogram-tabs_svg__Rectangle-Copy-2"
              fill="var(--color-background-shade-1)"
              x={22}
              y={56}
              width={44}
              height={8}
              rx={1}
            />
            <rect
              id="pictogram-tabs_svg__Rectangle-Copy-3"
              fill="var(--color-accent-shade-4)"
              x={98}
              y={44}
              width={44}
              height={8}
              rx={1}
            />
            <rect
              id="pictogram-tabs_svg__Rectangle-Copy-4"
              fill="var(--color-background-shade-1)"
              x={174}
              y={56}
              width={44}
              height={8}
              rx={1}
            />
            <rect
              id="pictogram-tabs_svg__Rectangle"
              fill="var(--color-text-shade-1)"
              x={8}
              y={72}
              width={231}
              height={16}
              rx={2}
            />
          </g>
        </svg>
      }
    </Box>
  );
});
