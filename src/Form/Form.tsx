import * as React from 'react';
import Base, { Props as BaseProps } from '../Base/Base';

interface Props extends BaseProps {}

const Form: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Base { ...props } Component="form" />
  );
};

export default Form;
