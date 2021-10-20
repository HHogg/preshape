import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "corner-up-right_svg__feather corner-up-right_svg__feather-corner-up-right" },
        React.createElement("path", { d: "M15 14l5-5-5-5" }),
        React.createElement("path", { d: "M4 20v-7a4 4 0 014-4h12" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=CornerUpRight.js.map