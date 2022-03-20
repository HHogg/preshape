import * as React from 'react';

function SvgPictogramToggle(props) {
  return (
    <svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        id="pictogram-toggle_svg__pictogram-toggle"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="pictogram-toggle_svg__Group" transform="translate(86 29)">
          <path
            d="M57 0c10.493 0 19 8.507 19 19s-8.507 19-19 19H19C8.507 38 0 29.493 0 19S8.507 0 19 0h38"
            id="pictogram-toggle_svg__Path"
            stroke="var(--color-text--shade-1)"
            strokeWidth={2}
            strokeLinecap="square"
            strokeDasharray="5,1"
          />
          <path
            d="M20 35c8.837 0 16-7.163 16-16S28.837 3 20 3 4 10.163 4 19s7.163 16 16 16z"
            id="pictogram-toggle_svg__Oval"
            fill="var(--color-text--shade-1)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgPictogramToggle;
