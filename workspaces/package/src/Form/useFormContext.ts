import { createContext, useContext } from 'react';
import { FormContextProps } from './FormProvider';

export const FormContext = createContext<FormContextProps<any, any>>({
  form: {
    error: {},
    hasError: false,
    hasSubmitted: false,
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

export const useFormContext = <T, E>() =>
  useContext<FormContextProps<T, E>>(FormContext);
