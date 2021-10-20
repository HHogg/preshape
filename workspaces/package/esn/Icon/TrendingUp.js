import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "trending-up_svg__feather trending-up_svg__feather-trending-up" },
        React.createElement("path", { d: "M23 6l-9.5 9.5-5-5L1 18" }),
        React.createElement("path", { d: "M17 6h6v6" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=TrendingUp.js.map