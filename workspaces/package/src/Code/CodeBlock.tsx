import { forwardRef } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';
import { Text, TextProps } from '../Text/Text';
import './CodeBlock.css';

SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);

export type TypeCodeBlockLanguage = 'css' | 'json' | 'tsx' | 'typescript';

/**
 * Provides some syntax highlighting, courtesy of PrismJS.
 */
export interface CodeBlockProps extends TextProps {
  /**
   * Code content
   **/
  children?: string;
  /**
   * Language of the content to be highlighted. What ever language is
   * set here the matching Ace mode needs to be imported. For example.
   **/
  language: TypeCodeBlockLanguage;
}

export const CodeBlock = forwardRef<any, CodeBlockProps>((props, ref) => {
  const { children, language, ...rest } = props;

  return (
    <Text {...rest} ref={ref}>
      <SyntaxHighlighter
        className="CodeBlock"
        language={language}
        style={style}
        customStyle={{
          backgroundColor: 'transparent',
        }}
      >
        {children?.trim() ?? ''}
      </SyntaxHighlighter>
    </Text>
  );
});
