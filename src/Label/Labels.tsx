import * as React from 'react';
import Base, { Attributes, BaseProps } from '../Base/Base';

export interface LabelsProps extends BaseProps {}

const Labels = React.forwardRef<HTMLElement, Attributes<HTMLElement, LabelsProps>>((props, ref) => {
  return (
    <Base { ...props }
        className="Labels"
        ref={ ref } />
  );
});

export default Labels;
