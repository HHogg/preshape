import * as React from 'react';
import { Attributes } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';
import Text from '../Text/Text';
import './SelectInputLabel.css';

export interface SelectInputLabelProps extends FlexProps {
  label: string;
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
        className="SelectInputLabel"
        direction="horizontal"
        gap="x2"
        ref={ ref }
        tag="label">
      <Flex>
        { children }
      </Flex>

      <Flex grow shrink textColor="text-shade-1">
        <Text ellipsis size="x1" strong>{ label }</Text>
      </Flex>
    </Flex>
  );
};

export default React.forwardRef(SelectInputLabel);
