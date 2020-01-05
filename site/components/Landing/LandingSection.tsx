import * as React from 'react';
import { Attributes, Base, BaseProps, Text } from 'preshape';

export interface Props extends BaseProps {
  id?: string;
  title?: string;
}

export default (props: Attributes<HTMLElement, Props>) => {
  const { children, id, title, ...rest } = props;

  return (
    <Base { ...rest } id={ id } paddingVertical="x8">
      { title && <Text margin="x4" size="x3" strong>{ title }</Text> }
      { children }
    </Base>
  );
};
