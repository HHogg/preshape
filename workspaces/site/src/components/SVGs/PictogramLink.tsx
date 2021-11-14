import * as React from 'react';

function SvgPictogramLink(props) {
  return (
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
          fill="var(--color-text--shade-1)"
          x={24}
          y={28}
          width={200}
          height={24}
          rx={1}
        />
        <rect
          id="pictogram-link_svg__Rectangle-Copy-5"
          fill="var(--color-accent--shade-4)"
          x={24}
          y={56}
          width={200}
          height={4}
          rx={1}
        />
      </g>
    </svg>
  );
}

export default SvgPictogramLink;
