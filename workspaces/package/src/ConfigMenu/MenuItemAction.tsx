import { LucideIcon } from 'lucide-react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import MenuItem, { MenuItemProps } from './MenuItem';

type MenuItemNavigateProps = MenuItemProps & {
  Icon: LucideIcon;
  title: string;
};

export default function MenuItemAction({
  Icon,
  title,
  ...rest
}: MenuItemNavigateProps) {
  return (
    <MenuItem {...rest}>
      <Box>
        <Icon size="1rem" />
      </Box>

      <Box grow minWidth="120px">
        <Text weight="x2">{title}</Text>
      </Box>
    </MenuItem>
  );
}
