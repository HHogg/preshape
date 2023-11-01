import classnames from 'classnames';
import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Link } from '../Link/Link';

/**
 * A tab component that can be used to display a tab. It should
 * be placed directly under the Tabs component.
 */
export interface TabProps extends BoxProps {
  /** Applies the active styling to the Tab */
  active?: boolean;
}

export const Tab = forwardRef<any, TabProps>((props, ref) => {
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
    <Box
      {...rest}
      backgroundColor={backgroundColor}
      className={classes}
      ref={ref}
    >
      <Box className="Tab__background">
        <Link display="block" padding="x3" size="x2" weight="x2">
          {children}
        </Link>
      </Box>
    </Box>
  );
});
