import { Box, Text } from 'preshape';

interface Props {
  children: JSX.Element;
  isArray?: boolean;
}

const TypeText = (props: Props) => {
  const { children, isArray } = props;

  return (
    <Box alignChildrenVertical="middle" flex="horizontal" gap="x1">
      <Box>{children}</Box>

      {isArray && (
        <Box>
          <Text weight="x2" tag="strong">
            []
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default TypeText;
