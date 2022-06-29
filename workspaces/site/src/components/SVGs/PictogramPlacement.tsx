import * as React from 'react';

function SvgPictogramPlacement(props) {
  return (
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
        <rect
          id="pictogram-placement_svg__Rectangle-Copy-6"
          fill="var(--color-text-shade-1)"
          x={32}
          y={19}
          width={184}
          height={40}
          rx={2}
        />
        <rect
          id="pictogram-placement_svg__Rectangle-Copy-7"
          fill="var(--color-text-shade-1)"
          transform="rotate(45 124 58)"
          x={116}
          y={50}
          width={16}
          height={16}
          rx={2}
        />
      </g>
    </svg>
  );
}

export default SvgPictogramPlacement;
