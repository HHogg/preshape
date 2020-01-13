import * as React from 'react';
import TypeTooltipIntrinsic, { Props as TypeTooltipIntrinsicProps } from './TypeTooltipIntrinsic';

interface Props extends TypeTooltipIntrinsicProps {}

export default (props: Props) => {
  const { onStateChange, ...rest } = props;

  const handleOnChange = (value?: boolean | number | string) => {
    if (value === '' || value === undefined) {
      onStateChange(undefined);
    } else if (Number.isFinite(parseInt(value.toString()))) {
      onStateChange(parseInt(value.toString()));
    }
  };

  return (
    <TypeTooltipIntrinsic { ...rest }
        onStateChange={ handleOnChange }
        placeholder="Enter number" />
  );
};
