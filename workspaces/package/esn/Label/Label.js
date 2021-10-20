import * as React from 'react';
import classnames from 'classnames';
import Text from '../Text/Text';
import './Label.css';
const Label = (props, ref) => {
    const { active, backgroundColor = 'text-shade-1', textColor = 'background-shade-1', ...rest } = props;
    const classes = classnames('Label', {
        'Label--active': active,
    });
    return (React.createElement(Text, Object.assign({}, rest, { backgroundColor: backgroundColor, className: classes, ref: ref, size: "x1", strong: true, tag: "div", textColor: textColor })));
};
export default React.forwardRef(Label);
//# sourceMappingURL=Label.js.map