import * as React from 'react';
import { ModalContext } from './Modal';
import Box from '../Box/Box';
import * as Icons from '../Icon';
import Link from '../Link/Link';
const ModalHeader = (props, ref) => {
    const { children, closeIconSize = '24px', ...rest } = props;
    const { onClose } = React.useContext(ModalContext);
    return (React.createElement(Box, Object.assign({}, rest, { alignChildrenVertical: "start", borderBottom: true, borderColor: "background-shade-3", borderSize: "x2", className: "Modal__header", flex: "horizontal", gap: "x6", ref: ref }),
        React.createElement(Box, { grow: true, shrink: true }, children),
        onClose && (React.createElement(Box, null,
            React.createElement(Link, { onPointerUp: onClose },
                React.createElement(Icons.X, { size: closeIconSize }))))));
};
export default React.forwardRef(ModalHeader);
//# sourceMappingURL=ModalHeader.js.map