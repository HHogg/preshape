export declare type URLState<S> = Partial<Record<keyof S, undefined | string>>;
export declare type URLStateDefault<S, K extends keyof S> = S[K] | ((state: S) => S[K]);
export declare type URLStateDefaults<S> = {
    [K in keyof S]?: URLStateDefault<S, K>;
};
export declare type URLStateDecoder<S, K extends keyof S> = (v: string, state: URLState<S>) => S[K];
export declare type URLStateDecoders<S> = {
    [K in keyof S]?: URLStateDecoder<S, K>;
};
export declare type URLStateEncoder<S, K extends keyof S> = (v: S[K]) => string;
export declare type URLStateEncoders<S> = {
    [K in keyof S]?: URLStateEncoder<S, K>;
};
export declare type URLStateValidator<S, K extends keyof S> = (v: S[K], s: Partial<S>) => boolean;
export declare type URLStateValidators<S> = {
    [K in keyof S]?: URLStateValidator<S, K>;
};
interface Props<S> {
    decoders: URLStateDecoders<S>;
    defaults: URLStateDefaults<S>;
    encoders: URLStateEncoders<S>;
    onUpdateSearch: (search: string) => void;
    search: string;
    validators: URLStateValidators<S>;
}
declare function useUrlState<S>(props: Props<S>): S & {
    onUpdateUrlState: (state: Partial<S>) => void;
    search: string;
};
export default useUrlState;
//# sourceMappingURL=useUrlState.d.ts.map