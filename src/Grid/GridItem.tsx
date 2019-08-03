import * as React from 'react';
import Base, { Props as BaseProps } from '../Base/Base';

interface Props extends BaseProps {
  /** Specifies a specific column this item should be in. */
  column?: number;
  /** Specifies a specific row this item should be in. */
  row?: number;
}

const GridItem: React.FunctionComponent<Props> = (props: Props) => {
  const {
    column,
    row,
    ...rest
  } = props;

  const style = {
    gridColumn: column,
    gridRow: row,
  };

  return (
    <Base { ...rest } className="GridItem" style={ style } />
  );
};

export default GridItem;
