import * as React from 'react';
import { TypeBaseSize } from '../Base/Base';
import CheckBoxIndicator, { Props as CheckboxIndicatorProps } from './CheckBoxIndicator';
import SelectInputLabel from '../SelectInputLabel/SelectInputLabel';
import './CheckBox.css';

interface Props extends CheckboxIndicatorProps {
  /** A styled disabled state that disables all interactions */
  disabled?: boolean;
  /** A label that gives describes what the input is for */
  label: string;
  /** @Ignore */
  margin?: TypeBaseSize;
  /** @Ignore */
  padding?: TypeBaseSize;
  /** @Ignore */
  paddingHorizontal?: TypeBaseSize;
  /** @Ignore */
  paddingVertical?: TypeBaseSize;
}

const CheckBox: React.FunctionComponent<Props> = (props: Props) => {
  const {
    disabled,
    label,
    margin,
    padding,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    ...rest
  } = props;

  return (
    <SelectInputLabel
        disabled={ disabled }
        label={ label }
        margin={ margin }
        padding={ padding }
        paddingHorizontal={ paddingHorizontal }
        paddingVertical={ paddingVertical }>
      <CheckBoxIndicator { ...rest } disabled={ disabled } />
    </SelectInputLabel>
  );
};

export default CheckBox;
