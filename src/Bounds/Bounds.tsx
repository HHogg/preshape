import * as React from 'react';
import Base, { Props as BaseProps } from '../Base/Base';
import { useResizeObserver } from '../hooks';

const { useRef } = React;

interface Size {
  height: number;
  width: number;
}

interface Props extends BaseProps {
  children: (size: Size) => React.ReactNode;
}

const Bounds: React.FunctionComponent<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const ref = useRef<HTMLElement>(null);
  const size = useResizeObserver(ref);

  return (
    <Base { ...rest } innerRef={ ref }>
      { children(size) }
    </Base>
  );
};

export default Bounds;
