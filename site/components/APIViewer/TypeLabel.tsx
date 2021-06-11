import * as React from 'react';
import { Base, Label, LabelProps, Icon } from 'preshape';
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
        <Base
            alignChildrenVertical="middle"
            flex="horizontal"
            gap="x1">
          <Base>
            { children }
          </Base>

          { hasInfo && (
            <Base>
              <Icon name="Info" size="0.875rem" />
            </Base>
          ) }
        </Base>
      </TypeText>
    </Label>
  );
});
