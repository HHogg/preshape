import * as React from 'react';
import classnames from 'classnames';
import Prism from 'prismjs';
import Code from '../Code/Code';
import Text, { Props as TextProps } from '../Text/Text';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import './CodeBlock.css';

interface Props extends TextProps {
  children?: string;
  language?:
    'css' |
    'html' |
    'javascript' |
    'js' |
    'jsx' |
    'json';
  wrap?: boolean;
}

const CodeBlock: React.FunctionComponent<Props> = (props: Props) => {
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
        Component="pre"
        className={ classes }>
      { language ? (
        <Code dangerouslySetInnerHTML={ { __html: content } } />
      ) : (
        <Code>{ content }</Code>
      ) }
    </Text>
  );
};

export default CodeBlock;
