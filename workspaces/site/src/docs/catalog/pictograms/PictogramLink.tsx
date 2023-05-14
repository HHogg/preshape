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
            id="pictogram-link_svg__pictogram-link"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <rect
              id="pictogram-link_svg__Rectangle-Copy-4"
              fill="var(--color-text-shade-1)"
              x={24}
              y={28}
              width={200}
              height={24}
              rx={6}
            />
            <rect
              id="pictogram-link_svg__Rectangle-Copy-5"
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
};

export default forwardRef(Pictogram);
