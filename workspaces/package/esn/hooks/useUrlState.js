import { useEffect, useRef } from 'react';
const getURLSearchParamsAsObject = (urlSearchParamsString) => {
    const urlSearchParams = new URLSearchParams(urlSearchParamsString);
    const urlSearchParamsObj = {};
    urlSearchParams.forEach((value, key) => {
        urlSearchParamsObj[key] = value;
    });
    return urlSearchParamsObj;
};
function useUrlState(props) {
    const { decoders, defaults, encoders, onUpdateSearch, search, validators, } = props;
    const refSearch = useRef(search);
    const getDecoder = (k) => (decoders[k] || ((v) => v));
    const getEncoder = (k) => (encoders[k] || ((v) => v));
    const getValidator = (k) => (validators[k] || (() => true));
    const isEqual = (k, a, b) => {
        const encoder = getEncoder(k);
        return encoder ? encoder(a) === encoder(b) : false;
    };
    const getDefaultValue = (key, state) => {
        const defaultor = defaults[key];
        return typeof defaultor === 'function' ? defaultor(state) : defaultor;
    };
    const getPartialUrlState = () => {
        const urlState = {};
        const urlSearchParams = getURLSearchParamsAsObject(search);
        for (const key in urlSearchParams) {
            const decoder = getDecoder(key);
            const encodedValue = urlSearchParams[key];
            if (encodedValue !== undefined) {
                try {
                    urlState[key] = decoder(encodedValue, urlSearchParams);
                }
                catch (e) {
                    // eslint-disable-next-line no-console
                    console.error(e);
                }
            }
        }
        for (const key in defaults) {
            const defaultValue = getDefaultValue(key, urlState);
            const validator = getValidator(key);
            const decodedValue = urlState[key];
            if (decodedValue === undefined || !validator(decodedValue, urlState) || isEqual(key, defaultValue, decodedValue)) {
                delete urlState[key];
            }
        }
        return urlState;
    };
    const getFullUrlState = () => {
        const urlState = getPartialUrlState();
        for (const key in defaults) {
            if (!(key in urlState)) {
                urlState[key] = getDefaultValue(key, urlState);
            }
        }
        return urlState;
    };
    const getSearchString = (state) => {
        const urlSearchParams = new URLSearchParams();
        for (const key in state) {
            const encoder = getEncoder(key);
            const decodedValue = state[key];
            if (encoder && decodedValue !== undefined) {
                try {
                    urlSearchParams.set(key, encoder(decodedValue));
                }
                catch (e) {
                    // eslint-disable-next-line no-console
                    console.error(e);
                }
            }
        }
        return urlSearchParams.toString();
    };
    const setSearch = (state) => {
        const search = getSearchString(state);
        refSearch.current = search;
        onUpdateSearch(search);
    };
    const onUpdateUrlState = (state) => {
        const urlState = getPartialUrlState();
        const urlStateFull = getFullUrlState();
        for (const key in state) {
            const decodedValue = state[key];
            const validator = getValidator(key);
            const defaultValue = getDefaultValue(key, urlStateFull);
            if (decodedValue !== undefined && validator(decodedValue, state) && !isEqual(key, defaultValue, decodedValue)) {
                urlState[key] = decodedValue;
            }
            else {
                delete urlState[key];
            }
        }
        setSearch(urlState);
    };
    useEffect(() => {
        setSearch(getPartialUrlState());
    }, []);
    return {
        ...getFullUrlState(),
        onUpdateUrlState: onUpdateUrlState,
        search: getSearchString(getPartialUrlState()),
    };
}
export default useUrlState;
//# sourceMappingURL=useUrlState.js.map