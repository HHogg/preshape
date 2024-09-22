module.exports = {
  dimensions: false,
  prettier: false,
  typescript: true,
  indexTemplate: () => '',
  replaceAttrValues: {
    '#000': 'var(--color-text-shade-1)',
    '#000000': 'var(--color-text-shade-1)',
    '#000001': 'var(--color-text-shade-2)',
    '#000002': 'var(--color-text-shade-3)',
    '#5C7CFA': 'var(--color-accent-shade-3)',
    '#4C6EF5': 'var(--color-accent-shade-4)',
    '#4263EB': 'var(--color-accent-shade-5)',
    '#FFF': 'var(--color-background-shade-1)',
    '#FFFFFF': 'var(--color-background-shade-1)',
    '#FFFFFE': 'var(--color-background-shade-2)',
    '#FFFFFD': 'var(--color-background-shade-3)',
  },
  template: (variables, { tpl }) => {
    return tpl`/** AUTO GENERATED **/
import { Box, BoxProps } from 'preshape';
import { forwardRef } from 'react';

export const Pictogram = forwardRef<SVGSVGElement, BoxProps>((props, ref) => {
  return (
    <Box { ...props }
        className="Pictogram"
        ref={ ref }
        tag="svg"
        viewBox="0 0 248 96">
      {${variables.jsx}}
    </Box>
  );
});
`;
  },
  svgoConfig: {
    plugins: [
      {
        name: 'cleanupIds',
      },
    ],
  },
};
