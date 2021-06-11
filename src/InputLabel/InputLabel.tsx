import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';
import Text from '../Text/Text';
import './InputLabel.css';

export interface InputLabelProps extends BaseProps {
  /**
   * The disabled state that prevents the input from being clickable.
   * Note that this elements simply applies the disabled styling, it
   * still needs to be provided to the Input component.
   */
  disabled?: boolean;
  /**
   * The label string that is rendered above the Input.
   */
  label?: string;
}

const InputLabel: React.RefForwardingComponent<HTMLLabelElement, Attributes<HTMLLabelElement, InputLabelProps>> = (props, ref) => {
  const {
    children,
    disabled,
    label,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  return (
    <Base { ...rest }
        className="InputLabel"
        disabled={ disabled }
        flex="vertical"
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

      <Base
          alignChildrenVertical="middle"
          backgroundColor="background-shade-1"
          flex="horizontal"
          textColor="text-shade-1">
        { children }
      </Base>
    </Base>
  );
};

export default React.forwardRef(InputLabel);
