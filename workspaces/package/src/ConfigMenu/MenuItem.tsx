import { PropsWithChildren } from 'react';
import { Button, ButtonProps } from '../Button/Button';
import { Text } from '../Text/Text';

export type MenuItemProps = ButtonProps & {};

export default function MenuItem({
  children,
  ...rest
}: PropsWithChildren<MenuItemProps>) {
  return (
    <Button
      {...rest}
      align="start"
      alignChildren="start"
      borderRadius="x0"
      variant="tertiary"
      weight="x1"
      width="100%"
    >
      <Text
        alignChildrenHorizontal="start"
        alignChildrenVertical="middle"
        flex="horizontal"
        gap="x2"
        grow
        size="x3"
      >
        {children}
      </Text>
    </Button>
  );
}
