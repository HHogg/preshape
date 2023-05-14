import { forwardRef } from 'react';
import {
  SelectInputLabels,
  SelectInputLabelsProps,
} from '../SelectInputLabel/SelectInputLabels';

/**
 * A component that can be used to display a list of options.
 */
export interface OptionsProps extends SelectInputLabelsProps {}

export const Options = forwardRef<any, OptionsProps>((props, ref) => {
  return <SelectInputLabels {...props} ref={ref} />;
});
