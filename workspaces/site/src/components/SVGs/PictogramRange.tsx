import * as React from 'react';

function SvgPictogramRange(props) {
  return (
    <svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        id="pictogram-range_svg__pictogram-range"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M26 44h195a1 1 0 011 1v6a1 1 0 01-1 1H26a1 1 0 01-1-1v-6a1 1 0 011-1z"
          id="pictogram-range_svg__Rectangle-Copy"
          fill="var(--color-text--shade-1)"
        />
        <circle
          id="pictogram-range_svg__Oval"
          fill="var(--color-accent--shade-4)"
          cx={124}
          cy={48}
          r={12}
        />
      </g>
    </svg>
  );
}

export default SvgPictogramRange;
