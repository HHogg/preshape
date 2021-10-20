import * as React from 'react';
const CheckboxIndicator = (props, ref) => {
    return (React.createElement("div", { className: "CheckBox" },
        React.createElement("input", Object.assign({}, props, { className: "CheckBox__input", ref: ref, type: "checkbox" })),
        React.createElement("div", { className: "CheckBox__indicator" })));
};
export default React.forwardRef(CheckboxIndicator);
//# sourceMappingURL=CheckBoxIndicator.js.map