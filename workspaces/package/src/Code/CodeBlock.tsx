import { forwardRef, memo } from 'react';
import { Text, TextProps } from '../Text/Text';
import {
  Language,
  SyntaxHighlight,
  SyntaxHighlightProps,
} from './SyntaxHighlight';
import './CodeBlock.css';

/**
 * Provides some syntax highlighting, courtesy of PrismJS.
 */
export interface CodeBlockProps
  extends TextProps,
    Pick<SyntaxHighlightProps, 'wrapLongLines'> {
  /**
   * Code content
   **/
  children?: string;
  /**
   * Language of the content to be highlighted. What ever language is
   * set here the matching Ace mode needs to be imported. For example.
   **/
  language?: Language;
}

export const CodeBlock = memo(
  forwardRef<any, CodeBlockProps>((props, ref) => {
    const {
      children,
      language = 'typescript',
      wrap,
      wrapLongLines,
      ...rest
    } = props;

    return (
      <Text size="x3" {...rest} ref={ref}>
        <SyntaxHighlight
          className="CodeBlock"
          language={language}
          wrap={wrap}
          wrapLongLines={wrapLongLines}
        >
          {children?.trim() ?? ''}
        </SyntaxHighlight>
      </Text>
    );
  })
);
