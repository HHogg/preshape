import * as React from 'react';
import { TypeBaseSize } from '../Base/Base';
import Flex, { Props as FlexProps } from '../Flex/Flex';
import Text from '../Text/Text';
import './InputLabel.css';

interface Props extends FlexProps {
  children: React.ReactNode;
  disabled?: boolean;
  label?: string;
  paddingHorizontal?: TypeBaseSize;
  paddingVertical?: TypeBaseSize;
}

const InputLabel: React.FunctionComponent<Props> = (props: Props) => {
  const {
    children,
    disabled,
    label,
    paddingHorizontal,
    paddingVertical,
    ...rest
  } = props;

  return (
    <Flex Component="label" { ...rest }
        className="InputLabel"
        direction="vertical"
        disabled={ disabled }>
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

export default InputLabel;
