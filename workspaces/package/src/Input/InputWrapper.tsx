import classNames from 'classnames';
import React, {
  createContext,
  forwardRef,
  RefForwardingComponent,
} from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import Text from '../Text/Text';

export interface InputWrapperProps extends BoxProps {
  /**
   * A helpful description that can be displayed under the input.
   */
  description?: string;
  /**
   * The disabled state that prevents the input from being clickable.
   * Note that this elements simply applies the disabled styling, it
   * still needs to be provided to the Input component.
   */
  disabled?: boolean;
  /**
   * Sets styling to indicate the input is invalid.
   */
  invalid?: boolean;
  /**
   * The label string that is rendered above the Input.
   */
  label?: string;
}

export const InputWrapperContext = createContext<
  Pick<InputWrapperProps, 'disabled'>
>({
  disabled: false,
});

const InputWrapper: RefForwardingComponent<
  HTMLLabelElement,
  Attributes<HTMLLabelElement, InputWrapperProps>
> = (props, ref) => {
  const {
    children,
    borderRadius = 'x2',
    borderSize = 'x2',
    description,
    disabled,
    invalid,
    label,
    paddingHorizontal = 'x3',
    ...rest
  } = props;

  const classes = classNames('InputWrapper', {
    'InputWrapper--invalid': invalid,
  });

  return (
    <InputWrapperContext.Provider value={{ disabled }}>
      <Box
        {...rest}
        className={ classes }
        disabled={disabled}
        gap="x2"
        flex="vertical"
        tag="label"
      >
        {label && (
          <Text
            ellipsis
            paddingHorizontal={paddingHorizontal}
            size="x2"
            strong
          >
            {label}
          </Text>
        )}

        <Box
          alignChildrenVertical="middle"
          backgroundColor="background-shade-1"
          borderRadius={ borderRadius }
          borderSize={ borderSize }
          flex="horizontal"
          overflow="hidden"
          ref={ref}
        >
          {children}
        </Box>

        {description && (
          <Text
            paddingHorizontal={paddingHorizontal}
            size="x2"
            strong
            textColor="text-shade-4"
          >
            {description}
          </Text>
        )}
      </Box>
    </InputWrapperContext.Provider>
  );
};

export default forwardRef(InputWrapper);
