import { Box, BoxProps } from 'preshape';
import { forwardRef } from 'react';
export const Pictogram = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return <Box {...props} className="Pictogram" ref={ref} tag="svg" viewBox="0 0 248 96">
      {<svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}><g id="pictogram-textarea_svg__pictogram-textarea" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect id="pictogram-textarea_svg__Rectangle-Copy-8" fill="var(--color-text-shade-1)" x={4} y={16} width={240} height={64} rx={8} /><rect id="pictogram-textarea_svg__Rectangle-Copy-9" fill="var(--color-background-shade-1)" x={20} y={32} width={208} height={4} rx={1} /><rect id="pictogram-textarea_svg__Rectangle-Copy-11" fill="var(--color-background-shade-1)" x={20} y={60} width={208} height={4} rx={1} /></g></svg>}
    </Box>;
});