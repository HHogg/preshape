import * as React from 'react';
const RadioButtonIndicator = (props, ref) => {
    return (React.createElement("div", { className: "RadioButton" },
        React.createElement("input", Object.assign({}, props, { className: "RadioButton__input", ref: ref, type: "radio" })),
        React.createElement("div", { className: "RadioButton__indicator" })));
};
export default React.forwardRef(RadioButtonIndicator);
//# sourceMappingURL=RadioButtonIndicator.js.map