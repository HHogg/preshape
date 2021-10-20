import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "database_svg__feather database_svg__feather-database" },
        React.createElement("ellipse", { cx: 12, cy: 5, rx: 9, ry: 3 }),
        React.createElement("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
        React.createElement("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Database.js.map