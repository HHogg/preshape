import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import FormContextProvider, { FormProviderProps } from './FormContext';

/**
 * Form component with added abilities to communicate field-by-field
 * error pattern through context.
 */
export interface FormProps extends BoxProps, FormProviderProps {}

const Form: RefForwardingComponent<
  HTMLFormElement,
  Attributes<HTMLFormElement, FormProps>
> = (
  {
    form,
    validateOnlyDirty,
    validateOnlyOneAtATime,
    validateOnlySubmitted,
    ...rest
  },
  ref
) => {
  if (!form) {
    return <Box {...rest} ref={ref} tag="form" />;
  }

  return (
    <FormContextProvider
      form={form}
      validateOnlyDirty={validateOnlyDirty}
      validateOnlyOneAtATime={validateOnlyOneAtATime}
      validateOnlySubmitted={validateOnlySubmitted}
    >
      <Box {...rest} ref={ref} tag="form" />
    </FormContextProvider>
  );
};

export default forwardRef(Form);
