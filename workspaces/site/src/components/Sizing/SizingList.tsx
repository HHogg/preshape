import { Box, BoxProps, Text } from 'preshape';
import Sizing, { SizingProps } from './Sizing';

interface SizingListProps extends BoxProps {
  name: string;
  description: string;
  sizings: SizingProps[];
}

const SizingList = ({
  name,
  description,
  sizings,
  ...props
}: SizingListProps) => {
  return (
    <Box {...props}>
      <Box margin="x8">
        <Text id={name} size="x6" strong>
          {name}
        </Text>

        <Text margin="x2">{description}</Text>
      </Box>

      <Box flex="vertical" gap="x2">
        {sizings.map((sizing) => (
          <Sizing {...sizing} key={sizing.name} />
        ))}
      </Box>
    </Box>
  );
};

export default SizingList;
