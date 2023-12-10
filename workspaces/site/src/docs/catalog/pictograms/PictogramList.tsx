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
            id="pictogram-list_svg__pictogram-list"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <rect
              id="pictogram-list_svg__Rectangle-Copy-6"
              fill="var(--color-text-shade-1)"
              x={19}
              y={39.765}
              width={56}
              height={16}
              rx={4}
            />
            <rect
              id="pictogram-list_svg__Rectangle-Copy-10"
              fill="var(--color-text-shade-1)"
              x={173}
              y={39.765}
              width={56}
              height={16}
              rx={4}
            />
            <rect
              id="pictogram-list_svg__Rectangle-Copy-8"
              fill="var(--color-text-shade-1)"
              x={96}
              y={39.765}
              width={56}
              height={16}
              rx={4}
            />
            <rect
              id="pictogram-list_svg__Rectangle-Copy-7"
              fill="var(--color-accent-shade-4)"
              transform="rotate(20.5 85.5 47.765)"
              x={84}
              y={35.765}
              width={3}
              height={24}
              rx={1}
            />
            <rect
              id="pictogram-list_svg__Rectangle-Copy-9"
              fill="var(--color-accent-shade-4)"
              transform="rotate(20.5 162.5 47.765)"
              x={161}
              y={35.765}
              width={3}
              height={24}
              rx={1}
            />
          </g>
        </svg>
      }
    </Box>
  );
});
