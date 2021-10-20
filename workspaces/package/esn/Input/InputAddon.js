import * as React from 'react';
import Box from '../Box/Box';
import './Input.css';
const InputAddon = (props, ref) => {
    const { padding, paddingHorizontal = 'x3' } = props;
    return (React.createElement(Box, Object.assign({}, props, { padding: padding, paddingHorizontal: padding || paddingHorizontal, ref: ref })));
};
export default React.forwardRef(InputAddon);
//# sourceMappingURL=InputAddon.js.map