import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';
import Text from '../Text/Text';

export interface SelectInputLabelProps extends BaseProps {
  label: React.ReactNode;
}

const SelectInputLabel: React.RefForwardingComponent<HTMLLabelElement, Attributes<HTMLLabelElement, SelectInputLabelProps>> = (props, ref) => {
  const {
    children,
    label,
    ...rest
  } = props;

  return (
    <Base { ...rest }
        alignChildrenVertical="middle"
        className="SelectInputLabels__label"
        flex="horizontal"
        gap="x2"
        ref={ ref }
        tag="label">
      <Base>
        { children }
      </Base>

      <Base grow shrink>
        <Text
            className="SelectInputLabels__label-text"
            ellipsis
            size="x1"
            strong>{ label }</Text>
      </Base>
    </Base>
  );
};

export default React.forwardRef(SelectInputLabel);
