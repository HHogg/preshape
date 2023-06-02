import { Box, BoxProps } from 'preshape';
import { forwardRef } from 'react';
export const Pictogram = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return <Box {...props} className="Pictogram" ref={ref} tag="svg" viewBox="0 0 248 96">
      {<svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}><g id="pictogram-icon_svg__pictogram-icon" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect id="pictogram-icon_svg__Rectangle-Copy-8" fill="var(--color-text-shade-1)" x={92} y={16} width={64} height={64} rx={8} /><path d="M92 71.093h64V72a8 8 0 01-8 8h-48a8 8 0 01-8-8v-.907z" id="pictogram-icon_svg__Rectangle-Copy-8" fill="var(--color-accent-shade-4)" /><path d="M112 26h18.703a2 2 0 011.741 1.016l5.802 10.271a2 2 0 01.002 1.964l-5.806 10.328a2 2 0 01-1.738 1.02l-8.27.023a2 2 0 00-1.994 2V60a2 2 0 01-2 2H112a2 2 0 01-2-2V28a2 2 0 012-2z" id="pictogram-icon_svg__Rectangle" fill="var(--color-background-shade-1)" /></g></svg>}
    </Box>;
});