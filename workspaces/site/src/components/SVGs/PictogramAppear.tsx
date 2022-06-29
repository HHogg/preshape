import * as React from 'react';

function SvgPictogramAppear(props) {
  return (
    <svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        id="pictogram-appear_svg__pictogram-appear"
        stroke="none"
        strokeWidth={1}
        fill="var(--color-text-shade-1)"
        fillRule="evenodd"
      >
        <path
          d="M78 16h92a2 2 0 012 2v44a2 2 0 01-2 2H78a2 2 0 01-2-2V18a2 2 0 012-2z"
          id="pictogram-appear_svg__Rectangle-Copy-11"
        />
        <path
          d="M86 32h76a2 2 0 012 2v36a2 2 0 01-2 2H86a2 2 0 01-2-2V34a2 2 0 012-2z"
          id="pictogram-appear_svg__Rectangle-Copy-11"
          opacity={0.5}
        />
        <path
          d="M94 48h60a2 2 0 012 2v28a2 2 0 01-2 2H94a2 2 0 01-2-2V50a2 2 0 012-2z"
          id="pictogram-appear_svg__Rectangle-Copy-11"
          opacity={0.25}
        />
      </g>
    </svg>
  );
}

export default SvgPictogramAppear;
