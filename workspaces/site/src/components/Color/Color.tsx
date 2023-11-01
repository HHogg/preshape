import { Box, BoxProps, Text, TypeColor } from 'preshape';

export interface ColorProps extends Omit<BoxProps, 'children'> {
  name: string;
  css: string;
  js: string;
  value: string;
  prop?: string;
  textColor?: TypeColor;
}

const Color = ({
  name,
  css,
  js,
  value,
  prop,
  textColor = 'light-shade-1',
}: ColorProps) => {
  return (
    <Box flex="horizontal" gap="x6" id={name} key={name}>
      <Box
        alignChildren="middle"
        borderRadius="x2"
        borderColor="background-shade-4"
        borderSize="x1"
        flex="horizontal"
        width="4rem"
        style={{ backgroundColor: value }}
      >
        <Text size="x5" weight="x2" textColor={textColor}>
          Aa
        </Text>
      </Box>

      <Box basis="0" grow paddingVertical="x2">
        <Text margin="x1" size="x5" weight="x2">
          {name} / {value}
        </Text>
        <Text size="x3">
          {prop ? `"${prop}" /` : ''} var({css}) / {js}
        </Text>
      </Box>
    </Box>
  );
};

export default Color;
