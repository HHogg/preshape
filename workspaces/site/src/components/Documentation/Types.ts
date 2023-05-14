export type ApiStateValue = boolean | number | string | null | undefined;
export type ApiState = Record<string, ApiStateValue>;
export type ApisState = Record<string, ApiState>;

export interface ApiStatesController {
  onStateChange: (state: ApisState) => void;
  state: ApisState;
}

export interface ApiStateController {
  onStateChange: (state: ApiState) => void;
  state: ApiState;
}

export interface ApiValueController {
  onStateChange: (value: ApiStateValue) => void;
  state: ApiStateValue;
}
