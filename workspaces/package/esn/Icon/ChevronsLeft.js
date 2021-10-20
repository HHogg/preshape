import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "chevrons-left_svg__feather chevrons-left_svg__feather-chevrons-left" },
        React.createElement("path", { d: "M11 17l-5-5 5-5M18 17l-5-5 5-5" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=ChevronsLeft.js.map