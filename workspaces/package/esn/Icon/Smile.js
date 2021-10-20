import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "smile_svg__feather smile_svg__feather-smile" },
        React.createElement("circle", { cx: 12, cy: 12, r: 10 }),
        React.createElement("path", { d: "M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Smile.js.map