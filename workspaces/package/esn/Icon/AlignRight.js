import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "align-right_svg__feather align-right_svg__feather-align-right" },
        React.createElement("path", { d: "M21 10H7M21 6H3M21 14H3M21 18H7" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=AlignRight.js.map