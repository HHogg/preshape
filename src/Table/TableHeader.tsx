
import * as React from 'react';
import Base, { Props as BaseProps } from '../Base/Base';

interface Props extends BaseProps {}

const TableHeader: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Base { ...props } Component="thead" className="Table__header" />
  );
};

export default TableHeader;
