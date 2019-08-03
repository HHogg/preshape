
import * as React from 'react';
import classnames from 'classnames';
import Flex, { Props as FlexProps } from '../Flex/Flex';
import Link from '../Link/Link';

export interface Props extends FlexProps {
  active?: boolean;
  to?: string;
}

const MenuItem: React.FunctionComponent<Props> = (props: Props) => {
  const { active, children, to, ...rest } = props;
  const classes = classnames('MenuItem', {
    'MenuItem--active': active,
  });

  return (
    <Flex { ...rest } className={ classes }>
      <Link
          active={ active }
          display="block"
          size="x1"
          to={ to }>
        <div className="MenuItemElement">{ children }</div>
      </Link>
    </Flex>
  );
};

export default MenuItem;
