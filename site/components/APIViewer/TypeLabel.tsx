import * as React from 'react';
import { Label, LabelProps, Flex, Icon } from 'preshape';
import TypeText from './TypeText';

interface Props extends LabelProps {
  hasInfo?: boolean;
  isArray?: boolean;
}

export default React.forwardRef<HTMLDivElement, Props & React.HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { children, hasInfo, isArray, ...rest } = props;

  return (
    <Label { ...rest } ref={ ref }>
      <TypeText isArray={ isArray }>
        <Flex
            alignChildrenVertical="middle"
            direction="horizontal"
            gap="x1">
          <Flex>
            { children }
          </Flex>

          { hasInfo && (
            <Flex>
              <Icon name="Info" size="0.875rem" />
            </Flex>
          ) }
        </Flex>
      </TypeText>
    </Label>
  );
});
