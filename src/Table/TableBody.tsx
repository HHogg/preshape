import * as React from 'react';
import Base, { Props as BaseProps } from '../Base/Base';

interface Props extends BaseProps {}

const TableBody: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Base { ...props } Component="tbody" className="Table__body" />
  );
};

export default TableBody;
