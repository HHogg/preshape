import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';
import Text from '../Text/Text';

export interface SelectInputLabelProps extends FlexProps {
  label: React.ReactNode;
}

const SelectInputLabel: React.RefForwardingComponent<HTMLLabelElement, Attributes<HTMLLabelElement, SelectInputLabelProps>> = (props, ref) => {
  const {
    children,
    label,
    ...rest
  } = props;

  return (
    <Flex { ...rest }
        alignChildrenVertical="middle"
        className="SelectInputLabels__label"
        direction="horizontal"
        gap="x2"
        ref={ ref }
        tag="label">
      <Flex>
        { children }
      </Flex>

      <Flex grow shrink>
        <Text
            className="SelectInputLabels__label-text"
            ellipsis
            size="x1"
            strong>{ label }</Text>
      </Flex>
    </Flex>
  );
};

export default React.forwardRef(SelectInputLabel);
