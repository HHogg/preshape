import * as React from 'react';
import classnames from 'classnames';
import * as ace from 'brace';
import { Attributes } from '../Base/Base';
import { TypeEditorLanguage } from '../Editor/Editor';
import Text, { TextProps } from '../Text/Text';
import 'brace/ext/static_highlight';
import './CodeBlock.css';

const highlighter = ace.acequire('ace/ext/static_highlight');


/* eslint-disable @typescript-eslint/no-explicit-any */
const getMergedRef = (...refs: React.Ref<any>[]) => (value: any) => {
  for (const ref of refs) {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref !== null) {
      (ref.current as any) = value;
    }
  }
};
/* eslint-enable @typescript-eslint/no-explicit-any */


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

const CodeBlock: React.RefForwardingComponent<HTMLPreElement, Attributes<HTMLPreElement, CodeBlockProps>> = (props, refFor) => {
  const { children, language, wrap, ...rest } = props;
  const refContainer = React.useRef<Element>();
  const ref = getMergedRef(refContainer, refFor);
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
      { children }
    </Text>
  );
};

export default React.forwardRef(CodeBlock);
