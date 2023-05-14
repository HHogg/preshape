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
            id="pictogram-options_svg__pictogram-options"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="pictogram-options_svg__Group"
              transform="translate(26 20)"
              stroke="var(--color-text-shade-1)"
              strokeWidth={2}
            >
              <path
                d="M0 76V2a2 2 0 012-2h192a2 2 0 012 2v74"
                id="pictogram-options_svg__Path"
              />
            </g>
            <rect
              id="pictogram-options_svg__Rectangle-Copy-6"
              fill="var(--color-accent-shade-4)"
              x={25}
              y={11}
              width={198}
              height={4}
              rx={2}
            />
            <g
              id="pictogram-options_svg__Group-Copy"
              transform="translate(29 23)"
            >
              <path
                d="M2 0h186a2 2 0 012 2v28H0V2a2 2 0 012-2z"
                id="pictogram-options_svg__Rectangle-Copy-2"
                fill="var(--color-text-shade-1)"
              />
              <rect
                id="pictogram-options_svg__Rectangle-Copy-2"
                fill="var(--color-background-shade-1)"
                x={9}
                y={7.5}
                width={15}
                height={15}
                rx={0.75}
              />
              <rect
                id="pictogram-options_svg__Rectangle"
                fill="var(--color-background-shade-1)"
                x={33}
                y={12}
                width={126}
                height={6}
                rx={0.75}
              />
            </g>
            <g
              id="pictogram-options_svg__Group-Copy-3"
              transform="translate(29 55)"
            >
              <path
                id="pictogram-options_svg__Rectangle-Copy-2"
                fill="var(--color-text-shade-1)"
                d="M0 0h190v30H0z"
              />
              <rect
                id="pictogram-options_svg__Rectangle-Copy-2"
                fill="var(--color-background-shade-1)"
                x={9}
                y={7.5}
                width={15}
                height={15}
                rx={0.75}
              />
              <rect
                id="pictogram-options_svg__Rectangle-Copy-2"
                fill="var(--color-accent-shade-4)"
                x={13.5}
                y={12}
                width={6}
                height={6}
                rx={0.75}
              />
              <rect
                id="pictogram-options_svg__Rectangle"
                fill="var(--color-background-shade-1)"
                x={33}
                y={12}
                width={126}
                height={6}
                rx={0.75}
              />
            </g>
            <g
              id="pictogram-options_svg__Group-Copy-4"
              transform="translate(29 87)"
            >
              <path
                id="pictogram-options_svg__Rectangle-Copy-2"
                fill="var(--color-text-shade-1)"
                d="M0 0h190v9H0z"
              />
              <path
                d="M9.75 7.5h13.5a.75.75 0 01.75.75V9H9v-.75a.75.75 0 01.75-.75z"
                id="pictogram-options_svg__Rectangle-Copy-2"
                fill="var(--color-background-shade-1)"
              />
            </g>
          </g>
        </svg>
      }
    </Box>
  );
};

export default forwardRef(Pictogram);
