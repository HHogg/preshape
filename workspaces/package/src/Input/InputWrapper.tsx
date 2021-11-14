import React, {
  createContext,
  forwardRef,
  RefForwardingComponent,
} from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import Text from '../Text/Text';

export interface InputWrapperProps extends BoxProps {
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
    disabled,
    label,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  return (
    <InputWrapperContext.Provider value={{ disabled }}>
      <Box
        {...rest}
        borderRadius={borderRadius}
        borderSize={borderSize}
        className="InputWrapper"
        disabled={disabled}
        flex="vertical"
        overflow="hidden"
        ref={ref}
        tag="label"
      >
        {label && (
          <Text
            ellipsis
            paddingHorizontal={paddingHorizontal}
            paddingVertical={paddingVertical}
            size="x2"
            strong
          >
            {label}
          </Text>
        )}

        <Box
          alignChildrenVertical="middle"
          backgroundColor="background-shade-1"
          flex="horizontal"
          textColor="text-shade-1"
        >
          {children}
        </Box>
      </Box>
    </InputWrapperContext.Provider>
  );
};

export default forwardRef(InputWrapper);
