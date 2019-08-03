import * as React from 'react';
import classnames from 'classnames';
import Base, { Props as BaseProps } from '../Base/Base';
import Link from '../Link/Link';

interface Props extends BaseProps {
  /** Applies the active styling to the Tab */
  active?: boolean;
  /** @Ignore */
  children: React.ReactNode;
}

const Tab: React.FunctionComponent<Props> = (props: Props) => {
  const { active, children, ...rest } = props;
  const classes = classnames('Tab', {
    'Tab--active': active,
  });

  return (
    <Base { ...rest } className={ classes }>
      <Base
          backgroundColor={ active ? undefined : 'text-shade-1' }
          className="Tab__background"
          color={ active ? undefined : 'background-shade-1' }>
        <Link
            display="block"
            padding="x3"
            size="x1">
          { children }
        </Link>
      </Base>
    </Base>
  );
};

export default Tab;
