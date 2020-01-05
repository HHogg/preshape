import * as React from 'react';
import TypeTooltipIntrinsic from './TypeTooltipIntrinsic';

interface Props {
  children: (props: {
    onClick: (event: React.MouseEvent) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>;
  }) => React.ReactNode;
  value?: string;
  onChange: (value?: string) => void;
}

export default (props: Props) => {
  const { onChange, ...rest } = props;

  const handleOnChange = (value?: string) => {
    if (value === '' || value === undefined) {
      onChange(undefined);
    } else {
      onChange(value);
    }
  };

  return (
    <TypeTooltipIntrinsic { ...rest }
        onChange={ handleOnChange }
        placeholder="Enter number" />
  );
};
