import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { FormProvider, FormProviderProps } from './FormProvider';

/**
 * Form component with added abilities to communicate field-by-field
 * error pattern through context.
 */
export interface FormProps
  extends Omit<BoxProps, 'form'>,
    Omit<FormProviderProps, 'form'> {
  form?: FormProviderProps['form'];
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (
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
      <FormProvider
        form={form}
        validateOnlyDirty={validateOnlyDirty}
        validateOnlyOneAtATime={validateOnlyOneAtATime}
        validateOnlySubmitted={validateOnlySubmitted}
      >
        <Box {...rest} ref={ref} tag="form" />
      </FormProvider>
    );
  }
);
