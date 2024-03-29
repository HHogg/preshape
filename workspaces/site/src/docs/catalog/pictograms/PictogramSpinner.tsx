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
            id="pictogram-spinner_svg__pictogram-spinner"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <path
              d="M124 25a3 3 0 013 3v6a3 3 0 01-6 0v-6a3 3 0 013-3z"
              id="pictogram-spinner_svg__Rectangle"
              fill="var(--color-text-shade-1)"
            />
            <path
              d="M136.02 29.98a3 3 0 013 3v6a3 3 0 11-6 0v-6a3 3 0 013-3z"
              id="pictogram-spinner_svg__Rectangle"
              fill="var(--color-text-shade-1)"
              transform="rotate(45 136.02 35.98)"
            />
            <path
              d="M141 42a3 3 0 013 3v6a3 3 0 01-6 0v-6a3 3 0 013-3z"
              id="pictogram-spinner_svg__Rectangle"
              fill="var(--color-text-shade-1)"
              transform="rotate(90 141 48)"
            />
            <path
              d="M136.02 54.02a3 3 0 013 3v6a3 3 0 11-6 0v-6a3 3 0 013-3z"
              id="pictogram-spinner_svg__Rectangle"
              fill="var(--color-accent-shade-4)"
              transform="rotate(135 136.02 60.02)"
            />
            <path
              d="M124 59a3 3 0 013 3v6a3 3 0 01-6 0v-6a3 3 0 013-3z"
              id="pictogram-spinner_svg__Rectangle"
              fill="var(--color-text-shade-1)"
              transform="rotate(180 124 65)"
            />
            <path
              d="M111.98 54.02a3 3 0 013 3v6a3 3 0 01-6 0v-6a3 3 0 013-3z"
              id="pictogram-spinner_svg__Rectangle"
              fill="var(--color-text-shade-1)"
              transform="rotate(-135 111.98 60.02)"
            />
            <path
              d="M107 42a3 3 0 013 3v6a3 3 0 01-6 0v-6a3 3 0 013-3z"
              id="pictogram-spinner_svg__Rectangle"
              fill="var(--color-text-shade-1)"
              transform="rotate(-90 107 48)"
            />
            <path
              d="M111.98 29.98a3 3 0 013 3v6a3 3 0 01-6 0v-6a3 3 0 013-3z"
              id="pictogram-spinner_svg__Rectangle"
              fill="var(--color-text-shade-1)"
              transform="rotate(-45 111.98 35.98)"
            />
          </g>
        </svg>
      }
    </Box>
  );
});
