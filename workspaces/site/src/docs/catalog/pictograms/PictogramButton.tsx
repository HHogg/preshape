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
            id="pictogram-button_svg__pictogram-button"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <rect
              id="pictogram-button_svg__Rectangle-Copy-9"
              fill="var(--color-text-shade-1)"
              x={32}
              y={24}
              width={184}
              height={48}
              rx={8}
            />
            <rect
              id="pictogram-button_svg__Rectangle-Copy-22"
              fill="var(--color-background-shade-1)"
              x={56}
              y={44}
              width={100}
              height={8}
              rx={1}
            />
            <rect
              id="pictogram-button_svg__Rectangle-Copy-23"
              fill="var(--color-accent-shade-4)"
              x={180}
              y={38}
              width={4}
              height={20}
              rx={1}
            />
            <rect
              id="pictogram-button_svg__Rectangle-Copy-23"
              fill="var(--color-accent-shade-4)"
              x={172}
              y={46}
              width={20}
              height={4}
              rx={1}
            />
          </g>
        </svg>
      }
    </Box>
  );
});
