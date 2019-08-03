import * as React from 'react';
import Base, { Props as BaseProps } from '../Base/Base';

interface Props extends BaseProps {}

const Labels: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Base { ...props } className="Labels" />
  );
};

export default Labels;
