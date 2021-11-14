import * as React from 'react';

function SvgPictogramCheckbox(props) {
  return (
    <svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        id="pictogram-checkbox_svg__pictogram-checkbox"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <rect
          id="pictogram-checkbox_svg__Rectangle-Copy-2"
          fill="var(--color-text--shade-1)"
          x={4}
          y={30}
          width={240}
          height={40}
          rx={2}
        />
        <rect
          id="pictogram-checkbox_svg__Rectangle-Copy-2"
          fill="var(--color-background--shade-1)"
          x={16}
          y={40}
          width={20}
          height={20}
          rx={1}
        />
        <rect
          id="pictogram-checkbox_svg__Rectangle-Copy-2"
          fill="var(--color-accent--shade-4)"
          x={22}
          y={46}
          width={8}
          height={8}
          rx={1}
        />
        <rect
          id="pictogram-checkbox_svg__Rectangle"
          fill="var(--color-background--shade-1)"
          x={48}
          y={46}
          width={168}
          height={8}
          rx={1}
        />
      </g>
    </svg>
  );
}

export default SvgPictogramCheckbox;
