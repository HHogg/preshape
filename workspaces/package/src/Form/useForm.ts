import { useState, useEffect } from "react";
import { FormState, FormError } from "./FormContext";

export type FormOptions<T> = {
  initial: T;
  validate?: (value: T, setError: (error: FormError<T>) => void) => void;
};

const useForm = <T>({
  initial,
  validate,
}: FormOptions<T>): FormState<T> => {
  const [isDirty, setIsDirty] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [dirtyFields, setDirtyFields] = useState<Partial<Record<keyof T, true>>>({});
  const [state, setState] = useState<T>(initial);
  const [error, setError] = useState<FormError<T>>({});

  const getIsDirty = (field?: keyof T) => {
    if (!hasSubmitted) {
      return false;
    }

    if (!field) {
      return Object.values(dirtyFields).some(Boolean);
    }

    return isDirty || !!dirtyFields[field];
  };

  const reset = () => {
    setState(initial);
    setIsDirty(false);
    setHasSubmitted(false);
    setDirtyFields({});
    setError({});
  };

  const setDirty = (field: keyof T) => {
    setDirtyFields((f) => ({ ...f, [field]: true }));
  };

  const setSubmitted = () => {
    if (validate) {
      validate(state, setError);
    }

    setIsDirty(true);
    setHasSubmitted(true);
  };

  useEffect(() => {
    if (initial) {
      reset();
    }
  }, [initial]);

  useEffect(() => {
    if (validate) {
      validate(state, setError);
    } else {
      setError({});
    }
  }, [validate, setError, state]);

  return {
    error,
    getIsDirty,
    hasError: Object.keys(error).length > 0,
    state,
    setDirty,
    setError,
    setState,
    setSubmitted,
    reset,
  };
};

export default useForm;
