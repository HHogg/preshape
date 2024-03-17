import { forwardRef } from 'react';
import { Text, TextProps } from '../Text/Text';

export interface ArticleHeadingProps extends TextProps {
  level?: 'h1' | 'h2' | 'h3';
}

export const ArticleHeading = forwardRef<
  HTMLHeadingElement,
  ArticleHeadingProps
>(({ level = 'h1', ...props }, ref) => {
  const size =
    props.size ||
    (level === 'h1' && 'x6') ||
    (level === 'h2' && 'x5') ||
    (level === 'h3' && 'x4') ||
    'x6';

  return (
    <Text
      margin="x6"
      {...props}
      ref={ref}
      size={size}
      tag={level}
      weight="x2"
    />
  );
});
