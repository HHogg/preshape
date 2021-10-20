import * as React from 'react';
import RadioButtonIndicator from './RadioButtonIndicator';
import SelectInputLabel from '../SelectInputLabel/SelectInputLabel';
import './RadioButton.css';
const RadioButton = (props, ref) => {
    const { children, disabled, margin, padding, paddingHorizontal = 'x3', paddingVertical = 'x2', ...rest } = props;
    return (React.createElement(SelectInputLabel, { disabled: disabled, label: children, margin: margin, padding: padding, paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical },
        React.createElement(RadioButtonIndicator, Object.assign({}, rest, { disabled: disabled, ref: ref }))));
};
export default React.forwardRef(RadioButton);
//# sourceMappingURL=RadioButton.js.map