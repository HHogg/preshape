import * as React from 'react';
import Box from '../Box/Box';
import './Separator.css';
const Separator = (props, ref) => {
    const { borderColor = 'text-shade-1', borderSize = 'x1', ...rest } = props;
    return (React.createElement(Box, Object.assign({}, rest, { borderColor: borderColor, borderSize: borderSize, className: "Separator", ref: ref })));
};
export default React.forwardRef(Separator);
//# sourceMappingURL=Separator.js.map