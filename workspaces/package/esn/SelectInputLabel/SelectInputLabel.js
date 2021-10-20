import * as React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
const SelectInputLabel = (props, ref) => {
    const { borderRadius = 'x2', children, label, ...rest } = props;
    return (React.createElement(Box, Object.assign({}, rest, { alignChildrenVertical: "middle", borderRadius: borderRadius, className: "SelectInputLabels__label", flex: "horizontal", gap: "x2", ref: ref, tag: "label" }),
        React.createElement(Box, null, children),
        React.createElement(Box, { grow: true, shrink: true },
            React.createElement(Text, { className: "SelectInputLabels__label-text", ellipsis: true, size: "x2", strong: true }, label))));
};
export default React.forwardRef(SelectInputLabel);
//# sourceMappingURL=SelectInputLabel.js.map