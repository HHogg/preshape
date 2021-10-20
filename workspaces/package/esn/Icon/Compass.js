import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "compass_svg__feather compass_svg__feather-compass" },
        React.createElement("circle", { cx: 12, cy: 12, r: 10 }),
        React.createElement("path", { d: "M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Compass.js.map