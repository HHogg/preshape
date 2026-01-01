import { PropsWithChildren } from 'react';
import { Text, TextProps } from '../Text/Text';

type MenuItemTextProps = TextProps;

export default function MenuItemText({
  children,
  ...rest
}: PropsWithChildren<MenuItemTextProps>) {
  return (
    <Text
      {...rest}
      paddingHorizontal="x4"
      paddingVertical="x2"
      size="x3"
      width="0px"
      minWidth="100%"
    >
      {children}
    </Text>
  );
}
