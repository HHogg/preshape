import * as React from 'react';
import CheckBox from '../CheckBox/CheckBox';
import RadioButton from '../RadioButton/RadioButton';
const Option = (props, ref) => {
    const { multiselect, ...rest } = props;
    return multiselect
        ? React.createElement(CheckBox, Object.assign({}, rest, { ref: ref }))
        : React.createElement(RadioButton, Object.assign({}, rest, { ref: ref }));
};
export default React.forwardRef(Option);
//# sourceMappingURL=Option.js.map