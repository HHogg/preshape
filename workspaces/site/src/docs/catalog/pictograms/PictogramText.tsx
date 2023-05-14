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
            id="pictogram-text_svg__pictogram-text"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <rect
              id="pictogram-text_svg__Rectangle-Copy-2"
              fill="var(--color-text-shade-1)"
              x={40}
              y={30}
              width={144}
              height={4}
              rx={2}
            />
            <rect
              id="pictogram-text_svg__Rectangle-Copy-4"
              fill="var(--color-text-shade-1)"
              x={40}
              y={46}
              width={140}
              height={4}
              rx={2}
            />
            <rect
              id="pictogram-text_svg__Rectangle-Copy-7"
              fill="var(--color-text-shade-1)"
              x={40}
              y={70}
              width={140}
              height={4}
              rx={2}
            />
            <rect
              id="pictogram-text_svg__Rectangle-Copy-3"
              fill="var(--color-text-shade-1)"
              x={40}
              y={38}
              width={123}
              height={4}
              rx={2}
            />
            <rect
              id="pictogram-text_svg__Rectangle-Copy-6"
              fill="var(--color-text-shade-1)"
              x={40}
              y={62}
              width={123}
              height={4}
              rx={2}
            />
            <rect
              id="pictogram-text_svg__Rectangle-Copy-5"
              fill="var(--color-text-shade-1)"
              x={40}
              y={54}
              width={96}
              height={4}
              rx={2}
            />
            <rect
              id="pictogram-text_svg__Rectangle-Copy-8"
              fill="var(--color-text-shade-1)"
              x={40}
              y={78}
              width={96}
              height={4}
              rx={2}
            />
            <rect
              id="pictogram-text_svg__Rectangle-Copy"
              fill="var(--color-accent-shade-4)"
              x={40}
              y={14}
              width={168}
              height={8}
              rx={2}
            />
          </g>
        </svg>
      }
    </Box>
  );
};

export default forwardRef(Pictogram);
