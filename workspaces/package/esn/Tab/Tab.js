import * as React from 'react';
import classnames from 'classnames';
import Box from '../Box/Box';
import Link from '../Link/Link';
const Tab = (props, ref) => {
    const { active, backgroundColor = 'background-shade-1', children, ...rest } = props;
    const classes = classnames('Tab', {
        'Tab--active': active,
    });
    return (React.createElement(Box, Object.assign({}, rest, { backgroundColor: backgroundColor, className: classes, ref: ref }),
        React.createElement(Box, { className: "Tab__background" },
            React.createElement(Link, { display: "block", padding: "x3", size: "x1", strong: true }, children))));
};
export default React.forwardRef(Tab);
//# sourceMappingURL=Tab.js.map