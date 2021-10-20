import { useEffect, useState } from 'react';
function useLocalStorage(key, initialValue = undefined) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            return initialValue;
        }
    });
    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        catch (e) {
            /* */
        }
    };
    useEffect(() => {
        setValue(storedValue);
    }, []);
    return [storedValue, setValue];
}
export default useLocalStorage;
//# sourceMappingURL=useLocalStorage.js.map