import {
  PrismLight as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import rust from 'react-syntax-highlighter/dist/esm/languages/prism/rust';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';

export type Language = 'css' | 'json' | 'rust' | 'tsx' | 'typescript';

SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('rust', rust);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);

/**
 * Provides some syntax highlighting, courtesy of PrismJS.
 */
export interface SyntaxHighlightProps
  extends Omit<SyntaxHighlighterProps, 'children'> {
  /**
   * Code content
   **/
  children?: string;
  /**
   * Language of the content to be highlighted. What ever language is
   * set here the matching Ace mode needs to be imported. For example.
   **/
  language: Language;
}

export const SyntaxHighlight = (props: SyntaxHighlightProps) => {
  const { children, language, ...rest } = props;

  return (
    <SyntaxHighlighter
      {...rest}
      language={language}
      style={style}
      customStyle={{
        ...rest.style,
        backgroundColor: 'transparent',
      }}
    >
      {children?.trim() ?? ''}
    </SyntaxHighlighter>
  );
};
