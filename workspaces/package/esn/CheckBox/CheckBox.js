import * as React from 'react';
import CheckBoxIndicator from './CheckBoxIndicator';
import SelectInputLabel from '../SelectInputLabel/SelectInputLabel';
import './CheckBox.css';
const CheckBox = (props, ref) => {
    const { children, disabled, margin, padding, paddingHorizontal = 'x3', paddingVertical = 'x2', ...rest } = props;
    return (React.createElement(SelectInputLabel, { disabled: disabled, label: children, margin: margin, padding: padding, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical },
        React.createElement(CheckBoxIndicator, Object.assign({}, rest, { disabled: disabled, ref: ref }))));
};
export default React.forwardRef(CheckBox);
//# sourceMappingURL=CheckBox.js.map