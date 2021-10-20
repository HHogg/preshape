import * as React from 'react';
import classnames from 'classnames';
import * as ace from 'brace';
import Code from './Code';
import Text from '../Text/Text';
import 'brace/ext/static_highlight';
import './CodeBlock.css';
const highlighter = ace.acequire('ace/ext/static_highlight');
const CodeBlock = (props, ref) => {
    const { children, language, wrap, ...rest } = props;
    const refContainer = React.useRef(null);
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
    return (React.createElement(Text, Object.assign({}, rest, { className: classes, ref: ref, tag: "pre" }),
        React.createElement(Code, { ref: refContainer }, children)));
};
export default React.forwardRef(CodeBlock);
//# sourceMappingURL=CodeBlock.js.map