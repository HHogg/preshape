import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "award_svg__feather award_svg__feather-award" },
        React.createElement("circle", { cx: 12, cy: 8, r: 7 }),
        React.createElement("path", { d: "M8.21 13.89L7 23l5-3 5 3-1.21-9.12" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Award.js.map