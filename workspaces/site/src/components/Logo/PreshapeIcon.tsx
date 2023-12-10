import { Box, BoxProps } from 'preshape';
import { forwardRef } from 'react';
export const Logo = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return (
    <Box {...props} ref={ref} tag="svg">
      {
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
          <g
            id="preshape-icon_svg__P-day"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="preshape-icon_svg__Group"
              transform="translate(5 2)"
              strokeWidth={0.1}
              strokeLinecap="round"
            >
              <path
                id="preshape-icon_svg__Path-2"
                fill="var(--color-accent-shade-4)"
                stroke="var(--color-accent-shade-4)"
                d="M6 20v-7L0 0z"
              />
              <path
                id="preshape-icon_svg__Path"
                fill="var(--color-accent-shade-3)"
                stroke="var(--color-accent-shade-3)"
                d="M6 20L0 0v20z"
              />
              <path
                id="preshape-icon_svg__Rectangle"
                fill="var(--color-accent-shade-5)"
                stroke="var(--color-accent-shade-5)"
                d="M12 0v13H6z"
              />
              <path
                id="preshape-icon_svg__Path-3"
                fill="var(--color-accent-shade-4)"
                stroke="var(--color-accent-shade-4)"
                d="M6 13l6-13H0z"
              />
              <path
                id="preshape-icon_svg__Path-4"
                fill="var(--color-accent-shade-5)"
                stroke="var(--color-accent-shade-5)"
                d="M12 13l3.998-6.5L12 0z"
              />
            </g>
          </g>
        </svg>
      }
    </Box>
  );
});
