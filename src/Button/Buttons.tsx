import * as React from 'react';
import classnames from 'classnames';
import Base, { Attributes, BaseProps, TypeSize } from '../Base/Base';

/**
 * Button container component that joins or separates child components.
 */
export interface ButtonsProps extends BaseProps {
  /**
   * Spacing applied between child Button items, values are global spacing variables.
   *
   * @default "x1"
   */
  gap?: TypeSize;
  /** Configures the children Buttons to be joined together. */
  joined?: boolean;
}

const Buttons: React.RefForwardingComponent<HTMLElement, Attributes<HTMLElement, ButtonsProps>> = (props, ref) => {
  const { gap = 'x1', joined, ...rest } = props;
  const classes = classnames('Buttons', {
    'Buttons--joined': joined,
  });

  return (
    <Base { ...rest }
        className={ classes }
        flex="horizontal"
        gap={ joined ? undefined : gap }
        ref={ ref } />
  );
};

export default React.forwardRef(Buttons);
