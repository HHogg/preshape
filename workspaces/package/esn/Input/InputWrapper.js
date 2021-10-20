import * as React from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
export const InputWrapperContext = React.createContext({
    disabled: false,
});
const InputWrapper = (props, ref) => {
    const { children, borderRadius = 'x2', borderSize = 'x2', disabled, label, paddingHorizontal = 'x3', paddingVertical = 'x2', ...rest } = props;
    return (React.createElement(InputWrapperContext.Provider, { value: { disabled } },
        React.createElement(Box, Object.assign({}, rest, { borderRadius: borderRadius, borderSize: borderSize, className: "InputWrapper", disabled: disabled, flex: "vertical", overflow: "hidden", ref: ref, tag: "label" }),
            label && (React.createElement(Text, { ellipsis: true, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical, size: "x1", strong: true }, label)),
            React.createElement(Box, { alignChildrenVertical: "middle", backgroundColor: "background-shade-1", flex: "horizontal", textColor: "text-shade-1" }, children))));
};
export default React.forwardRef(InputWrapper);
//# sourceMappingURL=InputWrapper.js.map