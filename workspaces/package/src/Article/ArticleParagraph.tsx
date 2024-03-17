import { forwardRef } from 'react';
import { Text, TextProps } from '../Text/Text';

export interface ArticleParagraphProps extends TextProps {}

export const ArticleParagraph = forwardRef<
  HTMLDivElement,
  ArticleParagraphProps
>((props, ref) => {
  return <Text lineHeight={1.8} margin="x3" {...props} ref={ref} tag="p" />;
});
