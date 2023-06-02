import { Box, BoxProps } from 'preshape';
import { forwardRef } from 'react';
export const Pictogram = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return <Box {...props} className="Pictogram" ref={ref} tag="svg" viewBox="0 0 248 96">
      {<svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}><g id="pictogram-blockquote_svg__pictogram-blockquote" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect id="pictogram-blockquote_svg__Rectangle-Copy-2" fill="var(--color-text-shade-1)" x={36} y={24} width={4} height={52} rx={2} /><rect id="pictogram-blockquote_svg__Rectangle-Copy-2" fill="var(--color-text-shade-1)" x={48} y={36} width={167} height={4} rx={2} /><rect id="pictogram-blockquote_svg__Rectangle-Copy-4" fill="var(--color-text-shade-1)" x={48} y={52} width={140} height={4} rx={2} /><rect id="pictogram-blockquote_svg__Rectangle-Copy-3" fill="var(--color-text-shade-1)" x={48} y={44} width={123} height={4} rx={2} /><rect id="pictogram-blockquote_svg__Rectangle-Copy-5" fill="var(--color-accent-shade-4)" x={48} y={60} width={123} height={4} rx={2} /></g></svg>}
    </Box>;
});