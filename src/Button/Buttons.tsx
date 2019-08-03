import * as React from 'react';
import classnames from 'classnames';
import { TypeBaseSize } from '../Base/Base';
import Flex, { Props as FlexProps } from '../Flex/Flex';

export interface Props extends FlexProps {
  /** Spacing applied between child Button items, values are global spacing variables. */
  gap?: TypeBaseSize;
  /** Configures the children Buttons to be joined together. */
  joined?: boolean;
}

const Buttons: React.FunctionComponent<Props> = (props: Props) => {
  const { gap, joined, ...rest } = props;
  const classes = classnames('Buttons', {
    'Buttons--joined': joined,
  });

  return (
    <Flex { ...rest }
        className={ classes }
        direction="horizontal"
        gap={ joined ? undefined : (gap || 'x1') } />
  );
};

export default Buttons;
