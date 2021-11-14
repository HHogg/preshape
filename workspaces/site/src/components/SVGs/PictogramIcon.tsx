import * as React from 'react';

function SvgPictogramIcon(props) {
  return (
    <svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        id="pictogram-icon_svg__pictogram-icon"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="pictogram-icon_svg__Rectangle-Copy-8"
          fill="var(--color-text--shade-1)"
          x={92}
          y={16}
          width={64}
          height={64}
          rx={2}
        />
        <path
          d="M92 76h64v2a2 2 0 01-2 2H94a2 2 0 01-2-2v-2z"
          id="pictogram-icon_svg__Rectangle-Copy-8"
          fill="var(--color-accent--shade-4)"
        />
        <path
          id="pictogram-icon_svg__Rectangle"
          fill="var(--color-background--shade-1)"
          d="M110 28h21.87l6.93 12.269-6.93 12.327-11.43.031V64H110z"
        />
      </g>
    </svg>
  );
}

export default SvgPictogramIcon;
