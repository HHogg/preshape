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
          <title>{'pictogram-alert'}</title>
          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <rect
              fill="var(--color-text-shade-1)"
              x={4}
              y={24}
              width={240}
              height={48}
              rx={8}
            />
            <path
              d="M31.2405215,39.4259188 L20.9184979,56.4822541 C20.6325548,56.9547528 20.7837879,57.5695913 21.2562865,57.8555345 C21.4124492,57.9500398 21.5915001,58 21.7740324,58 L42.2416348,58 C42.7939195,58 43.2416348,57.5522847 43.2416348,57 C43.2416348,56.82005 43.1930773,56.6434343 43.1010827,56.4887767 L32.9555039,39.4324414 C32.6731631,38.9577814 32.0594927,38.8018759 31.5848327,39.0842168 C31.4437571,39.1681324 31.3255078,39.2854857 31.2405215,39.4259188 Z"
              fill="var(--color-accent-shade-4)"
            />
            <rect
              fill="var(--color-background-shade-1)"
              x={60}
              y={41}
              width={164}
              height={4}
              rx={1}
            />
            <rect
              fill="var(--color-background-shade-1)"
              x={60}
              y={51}
              width={123}
              height={4}
              rx={1}
            />
          </g>
        </svg>
      }
    </Box>
  );
});
