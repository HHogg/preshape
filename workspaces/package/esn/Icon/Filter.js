import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "filter_svg__feather filter_svg__feather-filter" },
        React.createElement("path", { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Filter.js.map