import * as React from 'react';
import Base from '../Base/Base';
import Text, { Props as TextProps } from '../Text/Text';
import './Label.css';

interface Props extends TextProps {}

const Label: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Base className="Label">
      <Text { ...props }
          size="x1"
          strong />
    </Base>
  );
};

export default Label;
