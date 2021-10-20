import * as React from 'react';
import { Attributes } from '../Box/Box';
import SelectInputLabels, { SelectInputLabelsProps } from '../SelectInputLabel/SelectInputLabels';

export interface OptionsProps extends SelectInputLabelsProps {}

const Options: React.RefForwardingComponent<HTMLDivElement, Attributes<HTMLDivElement, OptionsProps>> = (props, ref) => {
  return (
    <SelectInputLabels { ...props } ref={ ref } />
  );
};

export default React.forwardRef(Options);
