
import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';
import './Separator.css';

export interface SeparatorProps extends BaseProps {}

const Separator: React.RefForwardingComponent<HTMLElement, Attributes<HTMLElement, SeparatorProps>> = (props, ref) => {
  const {
    borderColor = 'text-shade-1',
    borderSize = 'x1',
    ...rest
  } = props;

  return (
    <Base
        { ...rest }
        borderColor={ borderColor }
        borderSize={ borderSize }
        className="Separator"
        ref={ ref } />
  );
};

export default React.forwardRef(Separator);
