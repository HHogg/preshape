import * as React from 'react' ;
import { transitionTimingFunction, TypeTheme } from 'preshape';

const bezierCurveToPath = (width: number, height: number, [x1, y1, x2, y2]: number[]) =>
  `M 0 ${height} C ${x1 * width} ${y1 * height}, ${(1 - x2) * width} ${(1 - y2) * height}, ${width} 0`;

interface Props {
  height: number;
  theme: TypeTheme;
  time: number;
  width: number;
}

export default (props: Props) => {
  const { height, width } = props;
  const hGrid = height / 10;
  const wGrid = width / 10;

  return (
    <svg
        height={ height }
        viewBox={ `0 0 ${width} ${height}` }
        width={ width }>
      <defs>
        <pattern
            height={ hGrid }
            id="grid-horizontal"
            patternUnits="userSpaceOnUse"
            width={ wGrid }>
          <path
              className="CubicBezier__grid-path"
              d={ `M 0 ${hGrid} L ${wGrid} ${hGrid}` } />
        </pattern>

        <pattern
            height={ hGrid }
            id="grid-vertical"
            patternUnits="userSpaceOnUse"
            width={ wGrid }>
          <path
              className="CubicBezier__grid-path"
              d={ `M ${wGrid} 0 L ${wGrid} ${hGrid}` } />
        </pattern>
      </defs>

      <rect fill="url(#grid-horizontal)" height={ height - hGrid } width={ width } />
      <rect fill="url(#grid-vertical)" height={ height } width={ width - wGrid } />

      <path
          className="CubicBezier__path"
          d={ bezierCurveToPath(width, height, transitionTimingFunction) } />

      <path
          className="CubicBezier__path--accent"
          d={ bezierCurveToPath(width, height, transitionTimingFunction) }
          style={ { animationDuration: `${props.time * 2}ms` } } />
    </svg>
  );
};
