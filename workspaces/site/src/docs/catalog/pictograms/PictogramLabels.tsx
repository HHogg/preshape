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
            id="pictogram-labels_svg__pictogram-labels"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <rect
              id="pictogram-labels_svg__Rectangle-Copy-15"
              fill="var(--color-text-shade-1)"
              x={4}
              y={24}
              width={56}
              height={24}
              rx={12}
            />
            <rect
              id="pictogram-labels_svg__Rectangle-Copy-17"
              fill="var(--color-accent-shade-4)"
              x={144}
              y={24}
              width={48}
              height={24}
              rx={12}
            />
            <rect
              id="pictogram-labels_svg__Rectangle-Copy-20"
              fill="var(--color-text-shade-1)"
              x={88}
              y={52}
              width={56}
              height={24}
              rx={12}
            />
            <rect
              id="pictogram-labels_svg__Rectangle-Copy-18"
              fill="var(--color-text-shade-1)"
              x={196}
              y={24}
              width={48}
              height={24}
              rx={12}
            />
            <path
              d="M76 24h52c6.627 0 12 5.373 12 12s-5.373 12-12 12H76c-6.627 0-12-5.373-12-12s5.373-12 12-12z"
              id="pictogram-labels_svg__Rectangle-Copy-16"
              fill="var(--color-text-shade-1)"
            />
            <path
              d="M16 52h56c6.627 0 12 5.373 12 12s-5.373 12-12 12H16C9.373 76 4 70.627 4 64s5.373-12 12-12z"
              id="pictogram-labels_svg__Rectangle-Copy-19"
              fill="var(--color-text-shade-1)"
            />
            <rect
              id="pictogram-labels_svg__Rectangle"
              fill="var(--color-background-shade-1)"
              x={12}
              y={34}
              width={40}
              height={4}
              rx={2}
            />
            <path
              d="M154 34h28a2 2 0 010 4h-28a2 2 0 010-4z"
              id="pictogram-labels_svg__Rectangle-Copy-2"
              fill="#FAFCFF"
            />
            <path
              d="M98 62h36a2 2 0 010 4H98a2 2 0 110-4z"
              id="pictogram-labels_svg__Rectangle-Copy-5"
              fill="var(--color-background-shade-1)"
            />
            <path
              d="M206 34h28a2 2 0 010 4h-28a2 2 0 010-4z"
              id="pictogram-labels_svg__Rectangle-Copy-3"
              fill="var(--color-background-shade-1)"
            />
            <path
              d="M74 34h56a2 2 0 010 4H74a2 2 0 110-4z"
              id="pictogram-labels_svg__Rectangle-Copy"
              fill="var(--color-background-shade-1)"
            />
            <path
              d="M14 62h60a2 2 0 110 4H14a2 2 0 110-4z"
              id="pictogram-labels_svg__Rectangle-Copy-4"
              fill="var(--color-background-shade-1)"
            />
          </g>
        </svg>
      }
    </Box>
  );
};

export default forwardRef(Pictogram);
