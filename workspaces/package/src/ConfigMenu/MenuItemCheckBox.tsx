import { CheckIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Box } from '../Box/Box';
import MenuItem, { MenuItemProps } from './MenuItem';

type MenuItemCheckBoxProps = MenuItemProps & {};

export default function MenuItemCheckBox({
  children,
  checked,
  ...rest
}: PropsWithChildren<MenuItemCheckBoxProps>) {
  return (
    <MenuItem {...rest} gap="x3">
      <Box paddingHorizontal="x1">
        <CheckIcon
          size="1rem"
          style={{ visibility: checked ? undefined : 'hidden' }}
        />
      </Box>

      <Box grow>{children}</Box>

      <Box></Box>
    </MenuItem>
  );
}
