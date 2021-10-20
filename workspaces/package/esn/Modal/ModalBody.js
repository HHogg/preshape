import * as React from 'react';
import Box from '../Box/Box';
const ModalBody = (props, ref) => {
    return (React.createElement(Box, Object.assign({}, props, { className: "Modal__body", flex: "vertical", grow: true, ref: ref, shrink: true })));
};
export default React.forwardRef(ModalBody);
//# sourceMappingURL=ModalBody.js.map