
import * as React from 'react';
import Base, { Props as BaseProps } from '../Base/Base';
import './Separator.css';

interface Props extends BaseProps {
  /**
   * Border colour to be applied, shades are taken from the current
   * theme. A value of true will reapply the current colour value.
   */
  borderColor?: 'text-shade-1' | 'text-shade-2' | 'text-shade-3';
  /** Thickness of the border to be applied */
  borderSize?: 'x1' | 'x2';
}

const Separator: React.FunctionComponent<Props> = (props: Props) => {
  const {
    borderColor = 'text-shade-1',
    borderSize = 'x1',
    ...rest
  } = props;

  return (
    <Base { ...rest }
        borderColor={ borderColor }
        borderSize={ borderSize }
        className="Separator" />
  );
};

export default Separator;
