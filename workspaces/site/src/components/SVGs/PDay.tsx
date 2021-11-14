import * as React from 'react';

function SvgPDay(props) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        id="P-day_svg__P-day"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="P-day_svg__Group" transform="translate(5 2)">
          <path id="P-day_svg__Path-2" fill="#3B5BDB" d="M6 20v-7L0 0z" />
          <path
            id="P-day_svg__Path"
            fill="var(--color-accent--shade-5)"
            d="M6 20L0 0v20z"
          />
          <path
            id="P-day_svg__Rectangle"
            fill="var(--color-accent--shade-3)"
            d="M12 0v13H6z"
          />
          <path
            id="P-day_svg__Path-3"
            fill="var(--color-accent--shade-4)"
            d="M6 13l6-13H0z"
          />
          <path
            id="P-day_svg__Path-4"
            fill="#748FFC"
            d="M12 13l3.998-6.5L12 0z"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgPDay;
