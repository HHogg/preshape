import * as React from 'react';
import classnames from 'classnames';
import { Attributes, TypeSize } from '../Base/Base';
import Flex, { FlexProps } from '../Flex/Flex';

/**
 * Button container component that joins or separates child components.
 */
export interface ButtonsProps extends FlexProps {
  /**
   * Spacing applied between child Button items, values are global spacing variables.
   *
   * @default "x1"
   */
  gap?: TypeSize;
  /** Configures the children Buttons to be joined together. */
  joined?: boolean;
}

const Buttons = React.forwardRef<HTMLElement, Attributes<HTMLElement, ButtonsProps>>((props, ref) => {
  const { gap = 'x1', joined, ...rest } = props;
  const classes = classnames('Buttons', {
    'Buttons--joined': joined,
  });

  return (
    <Flex { ...rest }
        className={ classes }
        direction="horizontal"
        gap={ joined ? undefined : gap }
        ref={ ref } />
  );
});

export default Buttons;
