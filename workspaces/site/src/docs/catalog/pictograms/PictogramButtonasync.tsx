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
            id="pictogram-buttonasync_svg__pictogram-buttonasync"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <rect
              id="pictogram-buttonasync_svg__Rectangle-Copy-9"
              fill="var(--color-text-shade-1)"
              x={32}
              y={24}
              width={184}
              height={48}
              rx={8}
            />
            <path
              d="M124 32c1.153 0 2.087.934 2.087 2.087v4.174a2.087 2.087 0 01-4.174 0v-4.174c0-1.153.934-2.087 2.087-2.087z"
              id="pictogram-buttonasync_svg__Rectangle-Copy"
              fill="var(--color-background-shade-1)"
            />
            <path
              d="M135.314 36.686a2.087 2.087 0 010 2.952l-2.952 2.951a2.087 2.087 0 11-2.951-2.951l2.951-2.952a2.087 2.087 0 012.952 0z"
              id="pictogram-buttonasync_svg__Rectangle-Copy-2"
              fill="var(--color-background-shade-1)"
            />
            <path
              d="M135.826 43.826c1.153 0 2.087.934 2.087 2.087v4.174a2.087 2.087 0 11-4.174 0v-4.174c0-1.153.934-2.087 2.087-2.087z"
              id="pictogram-buttonasync_svg__Rectangle-Copy-3"
              fill="var(--color-background-shade-1)"
              transform="rotate(90 135.826 48)"
            />
            <path
              d="M135.314 59.314a2.087 2.087 0 01-2.952 0l-2.951-2.952a2.087 2.087 0 012.951-2.951l2.952 2.951a2.087 2.087 0 010 2.952z"
              id="pictogram-buttonasync_svg__Rectangle-Copy-4"
              fill="var(--color-accent-shade-4)"
            />
            <path
              d="M124 55.652c1.153 0 2.087.935 2.087 2.087v4.174a2.087 2.087 0 01-4.174 0v-4.174c0-1.152.934-2.087 2.087-2.087z"
              id="pictogram-buttonasync_svg__Rectangle-Copy-5"
              fill="var(--color-background-shade-1)"
              transform="rotate(180 124 59.826)"
            />
            <path
              d="M112.686 59.314a2.087 2.087 0 010-2.952l2.952-2.951a2.087 2.087 0 112.951 2.951l-2.951 2.952a2.087 2.087 0 01-2.952 0z"
              id="pictogram-buttonasync_svg__Rectangle-Copy-6"
              fill="var(--color-background-shade-1)"
            />
            <path
              d="M112.174 43.826c1.153 0 2.087.934 2.087 2.087v4.174a2.087 2.087 0 01-4.174 0v-4.174c0-1.153.934-2.087 2.087-2.087z"
              id="pictogram-buttonasync_svg__Rectangle-Copy-7"
              fill="var(--color-background-shade-1)"
              transform="rotate(-90 112.174 48)"
            />
            <path
              d="M112.686 36.686a2.087 2.087 0 012.952 0l2.951 2.952a2.087 2.087 0 01-2.951 2.951l-2.952-2.951a2.087 2.087 0 010-2.952z"
              id="pictogram-buttonasync_svg__Rectangle-Copy-8"
              fill="var(--color-background-shade-1)"
            />
          </g>
        </svg>
      }
    </Box>
  );
});
