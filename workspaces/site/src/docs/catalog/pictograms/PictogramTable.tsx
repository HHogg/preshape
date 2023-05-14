import { forwardRef } from 'react';
import { Box, BoxProps } from 'preshape';
export const Pictogram = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return <Box {...props} className="Pictogram" ref={ref} tag="svg" viewBox="0 0 248 96">
      {<svg viewBox="0 0 248 96" xmlns="http://www.w3.org/2000/svg" {...props}><g id="pictogram-table_svg__pictogram-table" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><g id="pictogram-table_svg__Group" transform="translate(4 16)"><rect id="pictogram-table_svg__Rectangle-Copy-2" fill="var(--color-text-shade-1)" x={0} y={16} width={240} height={4} rx={1} /><rect id="pictogram-table_svg__Rectangle-Copy-5" fill="var(--color-text-shade-1)" x={20} y={0} width={56} height={8} rx={4} /><rect id="pictogram-table_svg__Rectangle-Copy-8" fill="var(--color-text-shade-1)" x={20} y={28} width={72} height={8} rx={4} /><rect id="pictogram-table_svg__Rectangle-Copy-14" fill="var(--color-accent-shade-4)" x={8} y={28} width={8} height={8} rx={4} /><rect id="pictogram-table_svg__Rectangle-Copy-13" fill="var(--color-text-shade-1)" x={20} y={54} width={80} height={8} rx={4} /><rect id="pictogram-table_svg__Rectangle-Copy-15" fill="var(--color-accent-shade-4)" x={8} y={54} width={8} height={8} rx={4} /><rect id="pictogram-table_svg__Rectangle-Copy-9" fill="var(--color-text-shade-1)" x={140} y={28} width={24} height={8} rx={4} /><rect id="pictogram-table_svg__Rectangle-Copy-11" fill="var(--color-text-shade-1)" x={200} y={28} width={32} height={8} rx={4} /><rect id="pictogram-table_svg__Rectangle-Copy-10" fill="var(--color-text-shade-1)" x={140} y={54} width={24} height={8} rx={4} /><rect id="pictogram-table_svg__Rectangle-Copy-12" fill="var(--color-text-shade-1)" x={200} y={54} width={32} height={8} rx={4} /><rect id="pictogram-table_svg__Rectangle-Copy-6" fill="var(--color-text-shade-1)" x={116} y={0} width={48} height={8} rx={4} /><rect id="pictogram-table_svg__Rectangle-Copy-7" fill="var(--color-text-shade-1)" x={176} y={0} width={56} height={8} rx={4} /><rect id="pictogram-table_svg__Rectangle-Copy-3" fill="var(--color-text-shade-1)" x={0} y={44} width={240} height={2} rx={1} /><rect id="pictogram-table_svg__Rectangle-Copy-4" fill="var(--color-text-shade-1)" x={0} y={70} width={240} height={2} rx={1} /></g></g></svg>}
    </Box>;
});