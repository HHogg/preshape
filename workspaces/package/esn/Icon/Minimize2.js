import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "minimize-2_svg__feather minimize-2_svg__feather-minimize-2" },
        React.createElement("path", { d: "M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Minimize2.js.map