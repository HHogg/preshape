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

export interface CodeBlockProps extends TextProps {
  children?: string;
  language?:
    string |
    'css' |
    'html' |
    'javascript' |
    'js' |
    'jsx' |
    'json';
  wrap?: boolean;
}

const CodeBlock = React.forwardRef<HTMLPreElement, Attributes<HTMLPreElement, CodeBlockProps>>((props, ref) => {
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
});

export default CodeBlock;
