import * as React from 'react';
import classnames from 'classnames';
import Box, { Attributes, BoxProps } from '../Box/Box';
import Link from '../Link/Link';

export interface TabProps extends BoxProps {
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
    <Box { ...rest }
        backgroundColor={ backgroundColor }
        className={ classes }
        ref={ ref }>
      <Box className="Tab__background">
        <Link
            display="block"
            padding="x3"
            size="x2"
            strong>
          { children }
        </Link>
      </Box>
    </Box>
  );
};

export default React.forwardRef(Tab);
