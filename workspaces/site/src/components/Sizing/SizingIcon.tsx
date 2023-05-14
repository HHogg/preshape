import { Box, BoxProps } from 'preshape';

export interface Props extends Omit<BoxProps, 'name' | 'value'> {
  name: string;
  css: string;
}

const SizingIcon = (props: Props) => {
  const { css, name, ...rest } = props;
  const shape = css.includes('radius') ? 'square' : 'line';

  return (
    <Box {...rest}>
      {shape === 'line' && (
        <Box
          backgroundColor="text-shade-1"
          height="1rem"
          width={`var(${css})`}
        />
      )}

      {shape === 'square' && (
        <Box
          backgroundColor="text-shade-1"
          borderRadius={name}
          height={`calc(var(${css}) * 4)`}
          width={`calc(var(${css}) * 4)`}
        />
      )}
    </Box>
  );
};

export default SizingIcon;
