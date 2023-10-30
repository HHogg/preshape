declare module 'react' {
  // To support custom variables in the React.CSSProperty types.
  export interface CSSProperties {
    [key: `--${string}`]: string | number;
  }

  // To support generic forwardRef components.
  // export function forwardRef<TElement, TProps = {}>(
  //   render: (
  //     props: TProps,
  //     ref: React.Ref<TElement>
  //   ) => React.ReactElement | null
  // ): (
  //   props: TProps & React.RefAttributes<TElement>
  // ) => React.ReactElement | null;
}

export type TypeBorderSize = 'x0' | 'x1' | 'x2' | 'x3';

export type TypeColor =
  | 'black'
  | 'white'
  | 'highlight'
  | 'accent-shade-1'
  | 'accent-shade-2'
  | 'accent-shade-3'
  | 'accent-shade-4'
  | 'accent-shade-5'
  | 'background-shade-1'
  | 'background-shade-2'
  | 'background-shade-3'
  | 'background-shade-4'
  | 'dark-shade-1'
  | 'dark-shade-2'
  | 'dark-shade-3'
  | 'light-shade-1'
  | 'light-shade-2'
  | 'light-shade-3'
  | 'negative-shade-1'
  | 'negative-shade-2'
  | 'negative-shade-3'
  | 'negative-shade-4'
  | 'negative-shade-5'
  | 'positive-shade-1'
  | 'positive-shade-2'
  | 'positive-shade-3'
  | 'positive-shade-4'
  | 'positive-shade-5'
  | 'text-shade-1'
  | 'text-shade-2'
  | 'text-shade-3'
  | 'text-shade-4'
  | 'transparent';

export type TypePosition =
  | 'center'
  | 'edge-to-edge'
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left';

export type TypeSize =
  | 'x0'
  | 'x1'
  | 'x2'
  | 'x3'
  | 'x4'
  | 'x6'
  | 'x8'
  | 'x10'
  | 'x12'
  | 'x16'
  | 'x24'
  | 'x32';

export type TypeTheme = 'day' | 'night';
