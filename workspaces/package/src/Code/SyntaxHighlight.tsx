import {
  PrismLight as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import rust from 'react-syntax-highlighter/dist/esm/languages/prism/rust';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import styleLight from 'react-syntax-highlighter/dist/esm/styles/prism/one-light';
import styleDark from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';
import { useThemeContext } from '../ThemeSwitcher/useThemeContext';

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

styleLight['code[class*="language-"]'].backgroundColor = 'transparent';

export const SyntaxHighlight = ({
  children,
  language,
  ...rest
}: SyntaxHighlightProps) => {
  const { theme } = useThemeContext();

  return (
    <SyntaxHighlighter
      {...rest}
      language={language}
      PreTag={'code' as any}
      style={theme === 'night' ? styleDark : styleLight}
      customStyle={{
        ...rest.style,
        background: 'transparent',
        backgroundColor: 'transparent',
      }}
      lineProps={{
        style: {
          background: 'transparent',
          backgroundColor: 'transparent',
        },
      }}
    >
      {children?.trim() ?? ''}
    </SyntaxHighlighter>
  );
};
