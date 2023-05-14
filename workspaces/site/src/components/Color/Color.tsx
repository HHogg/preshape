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
        borderColor="text-shade-1"
        borderSize="x1"
        flex="horizontal"
        width="4rem"
        style={{ backgroundColor: value }}
      >
        <Text size="x5" strong textColor={textColor}>
          Aa
        </Text>
      </Box>

      <Box basis="0" grow paddingVertical="x2">
        <Text size="x5" strong>
          {name} / {value}
        </Text>
        <Text>
          {prop ? `"${prop}" /` : ''} var({css}) / {js}
        </Text>
      </Box>
    </Box>
  );
};

export default Color;
