import * as React from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import Text from '../Text/Text';

export interface SelectInputLabelProps extends BoxProps {
  label: React.ReactNode;
}

const SelectInputLabel: React.RefForwardingComponent<HTMLLabelElement, Attributes<HTMLLabelElement, SelectInputLabelProps>> = (props, ref) => {
  const {
    borderRadius = 'x2',
    children,
    label,
    ...rest
  } = props;

  return (
    <Box { ...rest }
        alignChildrenVertical="middle"
        borderRadius={ borderRadius }
        className="SelectInputLabels__label"
        flex="horizontal"
        gap="x2"
        ref={ ref }
        tag="label">
      <Box>
        { children }
      </Box>

      <Box grow shrink>
        <Text
            className="SelectInputLabels__label-text"
            ellipsis
            size="x2"
            strong>{ label }</Text>
      </Box>
    </Box>
  );
};

export default React.forwardRef(SelectInputLabel);
