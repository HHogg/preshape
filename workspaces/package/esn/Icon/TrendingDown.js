import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "trending-down_svg__feather trending-down_svg__feather-trending-down" },
        React.createElement("path", { d: "M23 18l-9.5-9.5-5 5L1 6" }),
        React.createElement("path", { d: "M17 18h6v-6" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=TrendingDown.js.map