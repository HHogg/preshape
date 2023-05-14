import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';
import './Tabs.css';

/**
 * The root element used for constructing a tab.
 */
export interface TabsProps extends BoxProps {}

export const Tabs = forwardRef<any, TabsProps>((props, ref) => {
  return <Box {...props} className="Tabs" ref={ref} />;
});
