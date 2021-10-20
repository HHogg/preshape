import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "divide_svg__feather divide_svg__feather-divide" },
        React.createElement("circle", { cx: 12, cy: 6, r: 2 }),
        React.createElement("path", { d: "M5 12h14" }),
        React.createElement("circle", { cx: 12, cy: 18, r: 2 })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Divide.js.map