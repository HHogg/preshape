import { forwardRef } from 'react';
import { Box, BoxProps } from 'preshape';
export const Pictogram = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return <Box {...props} className="Pictogram" ref={ref} tag="svg" viewBox="0 0 248 96">
      {<svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}><g id="pictogram-appear_svg__pictogram-appear" stroke="none" strokeWidth={1} fill="var(--color-text-shade-1)" fillRule="evenodd"><path d="M84 16h80a8 8 0 018 8v32a8 8 0 01-8 8H84a8 8 0 01-8-8V24a8 8 0 018-8z" id="pictogram-appear_svg__Rectangle-Copy-11" /><path d="M92 32h64a8 8 0 018 8v24a8 8 0 01-8 8H92a8 8 0 01-8-8V40a8 8 0 018-8z" id="pictogram-appear_svg__Rectangle-Copy-11" opacity={0.5} /><path d="M100 48h48a8 8 0 018 8v16a8 8 0 01-8 8h-48a8 8 0 01-8-8V56a8 8 0 018-8z" id="pictogram-appear_svg__Rectangle-Copy-11" opacity={0.25} /></g></svg>}
    </Box>;
});