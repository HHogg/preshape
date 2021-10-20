import * as React from 'react';
import classnames from 'classnames';
import Box from '../Box/Box';
import './Button.css';
const Button = (props, ref) => {
    const { active, borderRadius = 'x1', borderSize = 'x2', color, size = 'x2', tag = 'button', variant = 'secondary', ...rest } = props;
    const classes = classnames('Button', {
        'Button--active': active,
        [`Button--${color}`]: color,
        [`Button--${size}`]: size,
        [`Button--${variant}`]: variant,
    });
    return (React.createElement(Box, Object.assign({}, rest, { alignChildren: "middle", borderRadius: borderRadius, borderSize: borderSize, className: classes, flex: "horizontal", ref: ref, tag: tag })));
};
export default React.forwardRef(Button);
//# sourceMappingURL=Button.js.map