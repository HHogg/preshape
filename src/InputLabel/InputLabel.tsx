import * as React from 'react';
import { Attributes, TypeSize } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';
import Text from '../Text/Text';
import './InputLabel.css';

interface InputLabelProps extends FlexProps {
  children: React.ReactNode;
  disabled?: boolean;
  label?: string;
  paddingHorizontal?: TypeSize;
  paddingVertical?: TypeSize;
}

const InputLabel: React.RefForwardingComponent<HTMLLabelElement, Attributes<HTMLLabelElement, InputLabelProps>> = (props, ref) => {
  const {
    children,
    disabled,
    label,
    paddingHorizontal,
    paddingVertical,
    ...rest
  } = props;

  return (
    <Flex { ...rest }
        className="InputLabel"
        direction="vertical"
        disabled={ disabled }
        ref={ ref }
        tag="label">
      { label && (
        <Text
            ellipsis
            paddingHorizontal={ paddingHorizontal }
            paddingVertical={ paddingVertical }
            size="x1"
            strong>
          { label }
        </Text>
      ) }

      { children }
    </Flex>
  );
};

export default React.forwardRef(InputLabel);
