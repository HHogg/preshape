import classNames from 'classnames';
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
    className,
    label,
    ...rest
  } = props;

  const classes = classNames('SelectInputLabels__label', className);

  return (
    <Box { ...rest }
        alignChildrenVertical="middle"
        borderRadius={ borderRadius }
        className={ classes }
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
            size="x3"
            strong>{ label }</Text>
      </Box>
    </Box>
  );
};

export default React.forwardRef(SelectInputLabel);
