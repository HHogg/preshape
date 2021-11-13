import { JSONOutput } from 'typedoc';

export interface APIRecord {
  module: string;
  name: string;
  rename?: string;
}

export type StatePrimitive = boolean | number | string | undefined;

export interface RendererContainer {
  onStateChange: (state: {
    [key: string]: StatePrimitive;
  }) => void;
  state: {
    [key: string]: StatePrimitive;
  };
}

export interface Renderer {
  context?: JSONOutput.DeclarationReflection;
  onStateChange: (value: StatePrimitive) => void;
  state: StatePrimitive;
}
