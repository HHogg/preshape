import * as React from 'react';
import classnames from 'classnames';
import Box from '../Box/Box';
const Buttons = (props, ref) => {
    const { gap = 'x1', joined, ...rest } = props;
    const classes = classnames('Buttons', {
        'Buttons--joined': joined,
    });
    return (React.createElement(Box, Object.assign({}, rest, { className: classes, flex: "horizontal", gap: joined ? undefined : gap, ref: ref })));
};
export default React.forwardRef(Buttons);
//# sourceMappingURL=Buttons.js.map