import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "chevrons-down_svg__feather chevrons-down_svg__feather-chevrons-down" },
        React.createElement("path", { d: "M7 13l5 5 5-5M7 6l5 5 5-5" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=ChevronsDown.js.map