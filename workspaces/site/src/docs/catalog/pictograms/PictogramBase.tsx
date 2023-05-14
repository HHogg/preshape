import { forwardRef } from 'react';
import { Box, BoxProps } from 'preshape';

const Pictogram: React.ForwardRefRenderFunction<SVGSVGElement, BoxProps> = (
  props,
  ref
) => {
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
            id="pictogram-base_svg__pictogram-base"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
            strokeDasharray={4}
          >
            <path
              d="M40 24h168a8 8 0 018 8v32a8 8 0 01-8 8H40a8 8 0 01-8-8V32a8 8 0 018-8z"
              id="pictogram-base_svg__Rectangle-Copy-10"
              stroke="var(--color-text-shade-1)"
              strokeWidth={2}
            />
          </g>
        </svg>
      }
    </Box>
  );
};

export default forwardRef(Pictogram);
