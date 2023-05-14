import { Box, BoxProps, Button, Text } from 'preshape';
import { useMatch } from 'react-router-dom';

type MenuItemProps = BoxProps & {
  nested?: boolean;
  to?: string;
};

export const MenuItem = ({ children, nested, to, ...props }: MenuItemProps) => {
  const pathName = to ? `${to}` : '';
  const matches = useMatch(pathName);
  const active = !!(pathName && matches);

  return (
    <Box paddingLeft={nested ? 'x3' : 'x0'}>
      <Box
        {...props}
        borderColor="text-shade-1"
        borderSize={nested ? 'x1' : 'x0'}
        borderLeft={nested}
      >
        <Button
          active={active}
          alignChildren="start"
          backgroundColorActive="text-shade-1"
          borderRadius="x2"
          variant="tertiary"
          uppercase={false}
          weak={nested && !active}
          style={
            nested ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } : {}
          }
          textColorActive="background-shade-1"
          to={to}
        >
          <Text size="x4">{children}</Text>
        </Button>
      </Box>
    </Box>
  );
};
