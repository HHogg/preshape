import { useEffect, useRef } from 'react';

export type URLState<S> = Partial<Record<keyof S, undefined | string>>;

export type URLStateDefault<S, K extends keyof S> = S[K] | ((state: S) => S[K]);
export type URLStateDefaults<S> = { [K in keyof S]?: URLStateDefault<S, K> };

export type URLStateDecoder<S, K extends keyof S> = (v: string, state: URLState<S>) => S[K];
export type URLStateDecoders<S> = { [K in keyof S]?: URLStateDecoder<S, K> };

export type URLStateEncoder<S, K extends keyof S> = (v: S[K]) => string;
export type URLStateEncoders<S> = { [K in keyof S]?: URLStateEncoder<S, K> };

export type URLStateValidator<S, K extends keyof S> = (v: S[K], s: Partial<S>) => boolean;
export type URLStateValidators<S> = { [K in keyof S]?: URLStateValidator<S, K> };

interface Props<S> {
  decoders: URLStateDecoders<S>;
  defaults: URLStateDefaults<S>;
  encoders: URLStateEncoders<S>;
  onUpdateSearch: (search: string) => void;
  search: string;
  validators: URLStateValidators<S>;
}

const getURLSearchParamsAsObject = (urlSearchParamsString: string) => {
  const urlSearchParams = new URLSearchParams(urlSearchParamsString);
  const urlSearchParamsObj: { [key: string]: string } = {};

  urlSearchParams.forEach((value, key) => {
    urlSearchParamsObj[key] = value;
  });

  return urlSearchParamsObj;
};


function useUrlState<S>(props: Props<S>) {
  const {
    decoders,
    defaults,
    encoders,
    onUpdateSearch,
    search,
    validators,
  } = props;

  const refSearch = useRef<string>(search);

  const getDecoder = <K extends keyof S>(k: K) => (decoders[k] || ((v: S[K]) => v)) as URLStateDecoder<S, K>;
  const getEncoder = <K extends keyof S>(k: K) => (encoders[k] || ((v: S[K]) => v)) as URLStateEncoder<S, K>;
  const getValidator = <K extends keyof S>(k: K) => (validators[k] || (() => true)) as URLStateValidator<S, K>;

  const isEqual = <K extends keyof S>(k: K, a: S[K], b: S[K]) => {
    const encoder = getEncoder(k);
    return encoder ? encoder(a) === encoder(b) : false;
  };

  const getDefaultValue = (key: keyof S, state: Partial<S>) => {
    const defaultor = defaults[key];
    return typeof defaultor === 'function' ? defaultor(state) : defaultor;
  };

  const getPartialUrlState = () => {
    const urlState: Partial<S> = {};
    const urlSearchParams = getURLSearchParamsAsObject(search) as URLState<S>;

    for (const key in urlSearchParams) {
      const decoder = getDecoder(key);
      const encodedValue = urlSearchParams[key] as (undefined | string);

      if (encodedValue !== undefined) {
        urlState[key] = decoder(encodedValue, urlSearchParams);
      }
    }

    for (const key in defaults) {
      const defaultValue = getDefaultValue(key, urlState);
      const validator = getValidator(key);
      const decodedValue = urlState[key] as S[Extract<keyof S, string>];

      if (decodedValue === undefined || !validator(decodedValue, urlState) || isEqual(key, defaultValue, decodedValue)) {
        delete urlState[key];
      }
    }

    return urlState;
  };

  const getFullUrlState = (): S => {
    const urlState = getPartialUrlState();

    for (const key in defaults) {
      if (!(key in urlState)) {
        urlState[key] = getDefaultValue(key, urlState);
      }
    }

    return urlState as S;
  };

  const getSearchString = (state: Partial<S>) => {
    const urlSearchParams = new URLSearchParams();

    for (const key in state) {
      const encoder = getEncoder(key);
      const decodedValue = state[key] as S[Extract<keyof S, string>];

      if (encoder && decodedValue !== undefined) {
        urlSearchParams.set(key, encoder(decodedValue));
      }
    }

    return urlSearchParams.toString();
  };

  const setSearch = (state: Partial<S>) => {
    const search = getSearchString(state);
    refSearch.current = search;
    onUpdateSearch(search);
  };

  const onUpdateUrlState = (state: Partial<S>) => {
    const urlState = getPartialUrlState();
    const urlStateFull = getFullUrlState();

    for (const key in state) {
      const validator = validators[key];
      const decodedValue = state[key] as S[Extract<keyof S, string>];
      const defaultValue = getDefaultValue(key, urlStateFull);

      if (decodedValue !== undefined && validator && validator(decodedValue, state) && !isEqual(key, defaultValue, decodedValue)) {
        urlState[key] = decodedValue;
      } else {
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
