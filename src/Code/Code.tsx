import * as React from 'react';
import Text, { Props as TextProps } from '../Text/Text';

interface Props extends TextProps {}

const Code: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Text { ...props } Component="code" monospace />
  );
};

export default Code;
