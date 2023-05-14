import { useEffect } from 'react';
import { useResizeObserver } from '../hooks';
import { useFormContext } from './useFormContext';

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
  }, [name, element, registerField, size]);

  return setResizeObserverElement;
};
