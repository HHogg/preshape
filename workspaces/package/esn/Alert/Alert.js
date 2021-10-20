import * as React from 'react';
import classnames from 'classnames';
import Box from '../Box/Box';
import './Alert.css';
const Alert = (props, ref) => {
    const { borderRadius = 'x2', borderSize = 'x2', color, fill, ...rest } = props;
    const classes = classnames('Alert', `Alert--${color}`, {
        'Alert--fill': fill,
    });
    return (React.createElement(Box, Object.assign({}, rest, { borderRadius: borderRadius, borderSize: borderSize, className: classes, ref: ref })));
};
export default React.forwardRef(Alert);
//# sourceMappingURL=Alert.js.map