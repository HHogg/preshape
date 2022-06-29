import React, {
  SetStateAction,
  createContext,
  useContext,
  PropsWithChildren,
  useRef,
} from 'react';

export type FormError<T> = Partial<Record<keyof T, string>>;

export type FormState<T> = {
  error: FormError<T>;
  hasError: boolean;
  getIsDirty: (field?: keyof T) => boolean;
  state: T;
  setDirty: (field: keyof T) => void;
  setError: (error: FormError<T>) => void;
  setState: (cb: SetStateAction<T>) => void;
  setSubmitted: () => void;
  reset: () => void;
};

export const FormContext = createContext<{
  form: FormState<any>;
  getError: (field: string) => string | undefined;
  registerField: (field: string) => () => void;
}>({
  form: {
    error: {},
    hasError: false,
    getIsDirty: () => false,
    state: {},
    setDirty: () => {},
    setError: () => {},
    setState: () => {},
    setSubmitted: () => {},
    reset: () => {},
  },
  getError: () => undefined,
  registerField: () => () => {},
});

export const useFormContext = () => useContext(FormContext);

/**
 * A context provider that communicates a field-by-field error/validation
 * pattern. Must be provided with a form from the useForm hook.
 */
export interface FormProviderProps {
  /**
   * Form state provided by the useForm hook. Used to enable
   * validations and error handling feedback in the UI components
   * through context.
   */
  form: FormState<any>;
}

const FormProvider = ({
  form,
  ...rest
}: PropsWithChildren<FormProviderProps>) => {
  const refFieldOrder = useRef<string[]>([]);

  const errorField = refFieldOrder.current.filter(
    (field) => form.getIsDirty(field) && form.error[field]
  )[0];

  //
  const getError = (field: string) => {
    return errorField && errorField === field ? form.error[field] : undefined;
  };

  //
  const registerField = (field: string) => {
    refFieldOrder.current.push(field);

    return () => {
      refFieldOrder.current = refFieldOrder.current.filter((f) => f !== field);
    };
  };

  return (
    <FormContext.Provider {...rest} value={{ form, getError, registerField }} />
  );
};

export default FormProvider;
