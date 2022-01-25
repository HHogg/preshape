import { useMemo } from "react";

type Matching<R> = R;
type Unmatching<P, R> = Exclude<P, keyof Matching<R>>;

const useMatchingProps = <P, R>(props: P, keys: (keyof P)[]): [R, P] => {
  return useMemo(() => {
    const match = Object.fromEntries(keys.map((k) => [k, 1]));
    const matching: Matching<R> = {} as Matching<R>;
    const unmatching: Unmatching<P, R> = {} as Unmatching<P, R>;

    for (const [key, value] of Object.entries(props)) {
      if (match[key]) {
        matching[key as keyof Matching<R>] = value;
      } else {
        unmatching[key as keyof Unmatching<P, R>] = value;
      }
    }

    return [matching, unmatching];
  }, [props, keys]);
};

export default useMatchingProps;
