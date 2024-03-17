import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box/Box';

/**
 * A list component that can be used to display a list of items.
 */
export interface ArticleProps extends BoxProps {}

export const Article = forwardRef<HTMLDivElement, ArticleProps>(
  (props, ref) => {
    return <Box maxWidth="800px" {...props} ref={ref} tag="article" />;
  }
);
