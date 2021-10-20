import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (state: T) => void]
function useLocalStorage<T = undefined>(key: string, initialValue = undefined) {
  const [storedValue, setStoredValue] = useState<T | undefined>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: undefined | T | ((value: undefined | T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      /* */
    }
  };

  useEffect(() => {
    setValue(storedValue);
  }, []);

  return [storedValue, setValue];
}

export default useLocalStorage;
