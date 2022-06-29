import * as React from 'react';

function SvgPictogramBase(props) {
  return (
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
          d="M34 24h180a2 2 0 012 2v44a2 2 0 01-2 2H34a2 2 0 01-2-2V26a2 2 0 012-2z"
          id="pictogram-base_svg__Rectangle-Copy-10"
          stroke="var(--color-text-shade-1)"
          strokeWidth={2}
        />
      </g>
    </svg>
  );
}

export default SvgPictogramBase;
