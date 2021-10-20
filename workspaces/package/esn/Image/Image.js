import * as React from 'react';
import Box from '../Box/Box';
import './Image.css';
const Image = (props, ref) => {
    return (React.createElement(Box, Object.assign({}, props, { className: "Image", ref: ref, tag: "img" })));
};
export default React.forwardRef(Image);
//# sourceMappingURL=Image.js.map