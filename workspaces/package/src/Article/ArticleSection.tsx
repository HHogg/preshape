import { forwardRef } from 'react';
import { Text, TextProps } from '../Text/Text';

export interface ArticleSectionProps extends TextProps {}

export const ArticleSection = forwardRef<HTMLDivElement, ArticleSectionProps>(
  ({ ...props }, ref) => {
    return <Text margin="x16" {...props} ref={ref} tag="section" />;
  }
);
