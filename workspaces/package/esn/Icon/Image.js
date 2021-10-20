import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "image_svg__feather image_svg__feather-image" },
        React.createElement("rect", { x: 3, y: 3, width: 18, height: 18, rx: 2, ry: 2 }),
        React.createElement("circle", { cx: 8.5, cy: 8.5, r: 1.5 }),
        React.createElement("path", { d: "M21 15l-5-5L5 21" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Image.js.map