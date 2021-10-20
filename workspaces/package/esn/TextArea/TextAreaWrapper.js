import * as React from 'react';
import InputWrapper from '../Input/InputWrapper';
const TextAreaWrapper = (props, ref) => {
    return (React.createElement(InputWrapper, Object.assign({}, props, { ref: ref })));
};
export default React.forwardRef(TextAreaWrapper);
//# sourceMappingURL=TextAreaWrapper.js.map