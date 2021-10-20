import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "percent_svg__feather percent_svg__feather-percent" },
        React.createElement("path", { d: "M19 5L5 19" }),
        React.createElement("circle", { cx: 6.5, cy: 6.5, r: 2.5 }),
        React.createElement("circle", { cx: 17.5, cy: 17.5, r: 2.5 })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Percent.js.map