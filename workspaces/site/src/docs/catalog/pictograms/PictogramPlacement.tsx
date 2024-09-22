/** AUTO GENERATED **/
import { Box, BoxProps } from 'preshape';
import { forwardRef } from 'react';
export const Pictogram = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return (
    <Box
      {...props}
      className="Pictogram"
      ref={ref}
      tag="svg"
      viewBox="0 0 248 96"
    >
      {
        <svg
          viewBox="0 0 248 96"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          {...props}
        >
          <title>{'pictogram-placement'}</title>
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <circle fill="var(--color-accent-shade-4)" cx={124} cy={76} r={4} />
            <g
              transform="translate(32.000000, 19.000000)"
              fill="var(--color-text-shade-1)"
            >
              <rect x={0} y={0} width={184} height={40} rx={8} />
              <rect
                transform="translate(92.000000, 39.000000) rotate(45.000000) translate(-92.000000, -39.000000) "
                x={84}
                y={31}
                width={16}
                height={16}
                rx={2}
              />
            </g>
          </g>
        </svg>
      }
    </Box>
  );
});
