import React, { forwardRef, RefForwardingComponent } from 'react';
import Box, { Attributes, BoxProps } from '../Box/Box';
import FormContextProvider, { FormState } from './FormContext';

/**
 * Form component with added abilities to communicate field-by-field
 * error pattern through context.
 */
export interface FormProps extends BoxProps {
  /**
   * Form state provided by the useForm hook. Used to enable
   * validations and error handling feedback in the UI components
   * through context.
   */
  form?: FormState<any>;
}

const Form: RefForwardingComponent<
  HTMLFormElement,
  Attributes<HTMLFormElement, FormProps>
> = ({ form, ...rest }, ref) => {
  if (!form) {
    return <Box {...rest} ref={ref} tag="form" />;
  }

  return (
    <FormContextProvider form={form}>
      <Box {...rest} ref={ref} tag="form" />
    </FormContextProvider>
  );
};

export default forwardRef(Form);
