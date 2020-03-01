import * as React from 'react';
import classnames from 'classnames';
import Base, { Attributes, BaseProps } from '../Base/Base';
import Link from '../Link/Link';

export interface TabProps extends BaseProps {
  /** Applies the active styling to the Tab */
  active?: boolean;
}

const Tab: React.RefForwardingComponent<HTMLElement, Attributes<HTMLElement, TabProps>> = (props, ref) => {
  const {
    active,
    backgroundColor = 'background-shade-1',
    children,
    ...rest
  } = props;
  const classes = classnames('Tab', {
    'Tab--active': active,
  });

  return (
    <Base { ...rest }
        backgroundColor={ backgroundColor }
        className={ classes }
        ref={ ref }>
      <Base className="Tab__background">
        <Link
            display="block"
            padding="x3"
            size="x1"
            strong>
          { children }
        </Link>
      </Base>
    </Base>
  );
};

export default React.forwardRef(Tab);
