import * as React from 'react';
import Box from '../Box/Box';
const ModalFooter = (props, ref) => {
    return (React.createElement(Box, Object.assign({}, props, { borderColor: "background-shade-3", borderSize: "x2", borderTop: true, className: "Modal__footer", grow: true, ref: ref, shrink: true })));
};
export default React.forwardRef(ModalFooter);
//# sourceMappingURL=ModalFooter.js.map