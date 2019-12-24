import * as React from 'react';
import Flex, { Props as FlexProps } from '../Flex/Flex';
import Text from '../Text/Text';
import './SelectInputLabel.css';

interface Props extends FlexProps {
  label: string;
}

const SelectInputLabel: React.FunctionComponent<Props> = (props: Props) => {
  const {
    children,
    label,
    ...rest
  } = props;

  return (
    <Flex { ...rest }
        Component="label"
        alignChildrenVertical="middle"
        className="SelectInputLabel"
        direction="horizontal"
        gap="x2">
      <Flex>
        { children }
      </Flex>

      <Flex Component={ Text }
          ellipsis
          grow
          shrink
          size="x1"
          strong
          textColor>
        { label }
      </Flex>
    </Flex>
  );
};

export default SelectInputLabel;
