import * as React from 'react';
import { Base, Text } from 'preshape';

interface Props {
  children: React.ReactNode;
  isArray?: boolean;
}

export default (props: Props) => {
  const { children, isArray } = props;

  return (
    <Base
        alignChildrenVertical="middle"
        flex="horizontal"
        gap="x1">
      <Base>
        { children }
      </Base>

      { isArray && (
        <Base>
          <Text inline strong>[]</Text>
        </Base>
      ) }
    </Base>
  );
};
