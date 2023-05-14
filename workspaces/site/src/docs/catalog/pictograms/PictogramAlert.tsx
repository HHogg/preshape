import { forwardRef } from 'react';
import { Box, BoxProps } from 'preshape';
export const Pictogram = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return <Box {...props} className="Pictogram" ref={ref} tag="svg" viewBox="0 0 248 96">
      {<svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}><g id="pictogram-alert_svg__pictogram-alert" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect id="pictogram-alert_svg__text" fill="var(--color-text-shade-1)" x={4} y={24} width={240} height={48} rx={8} /><path d="M31.24 39.426L20.919 56.482A1 1 0 0021.774 58h20.468a1 1 0 00.86-1.511L32.955 39.432a1 1 0 00-1.715-.006z" id="pictogram-alert_svg__accent" fill="var(--color-accent-shade-4)" /><rect id="pictogram-alert_svg__background" fill="var(--color-background-shade-1)" x={60} y={41} width={164} height={4} rx={1} /><rect id="pictogram-alert_svg__background" fill="var(--color-background-shade-1)" x={60} y={51} width={123} height={4} rx={1} /></g></svg>}
    </Box>;
});