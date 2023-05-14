import { Box, BoxProps, Text } from 'preshape';
import Color, { ColorProps } from './Color';

interface ColorListProps extends BoxProps {
  name: string;
  description: string;
  colors: ColorProps[];
}

export const ColorList = ({
  name,
  description,
  colors,
  ...props
}: ColorListProps) => {
  return (
    <Box {...props}>
      <Box margin="x8">
        <Text id={name} size="x6" strong>
          {name}
        </Text>

        <Text margin="x2">{description}</Text>
      </Box>

      <Box flex="vertical" gap="x2">
        {colors.map((color) => (
          <Color {...color} key={color.name} />
        ))}
      </Box>
    </Box>
  );
};
