import * as React from 'react';
import Box from '../Box/Box';
const Form = (props, ref) => {
    return (React.createElement(Box, Object.assign({}, props, { ref: ref, tag: "form" })));
};
export default React.forwardRef(Form);
//# sourceMappingURL=Form.js.map