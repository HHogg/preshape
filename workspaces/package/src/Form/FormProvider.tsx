import React, {
  SetStateAction,
  createContext,
  useContext,
  PropsWithChildren,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { useResizeObserver } from '../hooks';
import { FormValidateError } from './useForm';

export type FormState<T, E> = {
  error: FormValidateError<T, E>;
  hasError: boolean;
  hasSubmitted: boolean;
  getIsDirty: (field?: keyof T) => boolean;
  state: T;
  setDirty: (field: keyof T) => void;
  setError: (error: FormValidateError<T, E> | null) => void;
  setState: (cb: SetStateAction<T>) => void;
  setSubmitted: () => void;
  reset: () => void;
};

export type FormContextProps<T, E> = {
  form: FormState<T, E>;
  getError: (field: string) => string | undefined;
  registerField: (field: string, element: HTMLElement) => () => void;
};

const FormContext = createContext<FormContextProps<any, any>>({
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

/**
 * A hook to register a field with the form context.
 */
export const useFormRegisterField = (name?: string) => {
  const [size, setResizeObserverElement, element] =
    useResizeObserver<HTMLInputElement>();
  const { registerField } = useFormContext();

  useEffect(() => {
    if (name && element) {
      return registerField(name, element);
    }
  }, [name, element, size]);

  return setResizeObserverElement;
};

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
  form: FormState<any, any>;
  /**
   * Only validate fields that have been dirtied.
   */
  validateOnlyDirty?: boolean;
  /**
   * Only validate fields once the form has been submitted
   */
  validateOnlySubmitted?: boolean;
  /**
   *  Validates only one field at a time, in order as they appear
   * from the top of the screen.
   */
  validateOnlyOneAtATime?: boolean;
}

const FormProvider = ({
  form,
  validateOnlyDirty,
  validateOnlySubmitted,
  validateOnlyOneAtATime,
  ...rest
}: PropsWithChildren<FormProviderProps>) => {
  const [fields, setFields] = useState<{ [key: string]: number | null }>({});
  const fieldsOrdered = useMemo(
    () =>
      Object.entries(fields)
        .filter(([field]) => form.error[field])
        .sort(
          ([, aPriority], [, bPriority]) => (aPriority || 0) - (bPriority || 0)
        ),
    [fields, form.error]
  );

  const getError = (field: string) => {
    if (validateOnlySubmitted && !form.hasSubmitted) return;
    if (validateOnlyDirty && !form.getIsDirty(field)) return;
    if (validateOnlyOneAtATime && field !== fieldsOrdered[0]?.[0]) return;

    if (form.error[field]) {
      return form.error[field];
    }

    for (const [key, value] of Object.entries(form.error)) {
      if (key.startsWith(`${field}.`)) {
        return value;
      }
    }
  };

  const registerField = (field: string, element: HTMLElement) => {
    const domRect = element.getBoundingClientRect();
    const priority = domRect.top;

    setFields((fields) => ({
      ...fields,
      [field]: priority,
    }));

    return () => {
      setFields((fields) => ({
        ...fields,
        [field]: null,
      }));
    };
  };

  return (
    <FormContext.Provider {...rest} value={{ form, getError, registerField }} />
  );
};

export default FormProvider;
