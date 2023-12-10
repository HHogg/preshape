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
            id="pictogram-placement_svg__pictogram-placement"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <circle
              id="pictogram-placement_svg__Oval"
              fill="var(--color-accent-shade-4)"
              cx={124}
              cy={76}
              r={4}
            />
            <g
              id="pictogram-placement_svg__Group"
              transform="translate(32 19)"
              fill="var(--color-text-shade-1)"
            >
              <rect
                id="pictogram-placement_svg__Rectangle-Copy-6"
                x={0}
                y={0}
                width={184}
                height={40}
                rx={8}
              />
              <rect
                id="pictogram-placement_svg__Rectangle-Copy-7"
                transform="rotate(45 92 39)"
                x={84}
                y={31}
                width={16}
                height={16}
                rx={2}
              />
            </g>
          </g>
        </svg>
      }
    </Box>
  );
});
