import * as React from 'react';
import classnames from 'classnames';
import Prism from 'prismjs';
import { Attributes } from '../Base/Base';
import Code from '../Code/Code';
import Text, { TextProps } from '../Text/Text';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import './CodeBlock.css';

/**
 * Provides some syntax highlighting, courtesy of PrismJS.
 */
export interface CodeBlockProps extends TextProps {
  /** The code to be highlighted */
  children?: string;
  /** Language of the content to be highlighted. More are supported but not loaded. */
  language?:
    string |
    'css' |
    'html' |
    'javascript' |
    'js' |
    'jsx' |
    'json';
  /**
   * Allows for the code contents to be wrapped when it falls outside of the
   * containing element.
   */
  wrap?: boolean;
}

const CodeBlock: React.RefForwardingComponent<HTMLPreElement, Attributes<HTMLPreElement, CodeBlockProps>> = (props, ref) => {
  const { children, language, wrap, ...rest } = props;
  const classes = classnames('CodeBlock', {
    'CodeBlock--wrap': wrap,
    [`language-${language}`]: language,
  });

  let content = children;

  if (language && children) {
    content = Prism.highlight(children, Prism.languages[language], language);
  }

  return (
    <Text { ...rest }
        className={ classes }
        ref={ ref }
        tag="pre">
      { language ? (
        <Code dangerouslySetInnerHTML={ { __html: content as string } } />
      ) : (
        <Code>{ content }</Code>
      ) }
    </Text>
  );
};

export default React.forwardRef(CodeBlock);
