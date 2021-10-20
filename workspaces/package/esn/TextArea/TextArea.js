import * as React from 'react';
import { InputWrapperContext } from '../Input/InputWrapper';
import Text from '../Text/Text';
import './TextArea.css';
const TextArea = (props, ref) => {
    const { padding, paddingHorizontal = 'x3', paddingVertical = 'x2', ...rest } = props;
    if (rest.disabled !== undefined) {
        // eslint-disable-next-line no-console
        console.error('Preshape [TextArea]: Pass "disabled" to TextAreaWrapper');
    }
    const { disabled } = React.useContext(InputWrapperContext);
    return (React.createElement(Text, Object.assign({}, rest, { className: "TextArea", disabled: disabled, paddingHorizontal: padding || paddingHorizontal, paddingVertical: padding || paddingVertical, ref: ref, size: "x2", strong: true, tag: "textarea" })));
};
export default React.forwardRef(TextArea);
//# sourceMappingURL=TextArea.js.map