import * as React from 'react';
import classnames from 'classnames';
import * as ace from 'brace';
import { Attributes } from '../Box/Box';
import { TypeEditorLanguage } from '../Editor/Editor';
import Code from './Code';
import Text, { TextProps } from '../Text/Text';
import 'brace/ext/static_highlight';
import './CodeBlock.css';

const highlighter = ace.acequire('ace/ext/static_highlight');

/**
 * Provides some syntax highlighting, courtesy of PrismJS.
 */
export interface CodeBlockProps extends TextProps {
   /**
   * Language of the content to be highlighted. What ever language is
   * set here the matching Ace mode needs to be imported. For example.
   *
   * import 'ace/mode/javascript';
   **/
  children?: string;
  /** Language of the content to be highlighted */
  language: TypeEditorLanguage;
  /**
   * Allows for the code contents to be wrapped when it falls outside of the
   * containing element.
   */
  wrap?: boolean;
}

const CodeBlock: React.RefForwardingComponent<HTMLPreElement, Attributes<HTMLPreElement, CodeBlockProps>> = (props, ref) => {
  const { children, language, wrap, ...rest } = props;
  const refContainer = React.useRef<HTMLElement>(null);
  const classes = classnames('CodeBlock', {
    'CodeBlock--wrap': wrap,
    [`language-${language}`]: language,
  });

  React.useLayoutEffect(() => {
    if (refContainer.current) {
      highlighter(refContainer.current, {
        mode: `ace/mode/${language}`,
        theme: 'ace/theme/preshape',
      });
    }
  }, [children]);

  return (
    <Text { ...rest }
        className={ classes }
        ref={ ref }
        tag="pre">
      <Code ref={ refContainer }>
        { children }
      </Code>
    </Text>
  );
};

export default React.forwardRef(CodeBlock);
