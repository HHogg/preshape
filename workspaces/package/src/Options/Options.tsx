import React, { forwardRef } from 'react';
import SelectInputLabels, {
  SelectInputLabelsProps,
} from '../SelectInputLabel/SelectInputLabels';

/**
 * A component that can be used to display a list of options.
 */
export interface OptionsProps extends SelectInputLabelsProps {}

const Options: React.ForwardRefRenderFunction<any, OptionsProps> = (
  props,
  ref
) => {
  return <SelectInputLabels {...props} ref={ref} />;
};

export default forwardRef(Options);
