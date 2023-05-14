import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';

/**
 * The content element of the tab. This should be placed
 * directly under the Tab component.
 */
export interface TabContentProps extends BoxProps {}

export const TabContent = forwardRef<any, TabContentProps>((props, ref) => {
  const { backgroundColor = 'background-shade-1', ...rest } = props;

  return (
    <Box
      {...rest}
      backgroundColor={backgroundColor}
      className="TabContent"
      ref={ref}
    />
  );
});
