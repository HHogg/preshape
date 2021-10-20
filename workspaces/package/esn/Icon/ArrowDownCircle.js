import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "arrow-down-circle_svg__feather arrow-down-circle_svg__feather-arrow-down-circle" },
        React.createElement("circle", { cx: 12, cy: 12, r: 10 }),
        React.createElement("path", { d: "M8 12l4 4 4-4M12 8v8" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=ArrowDownCircle.js.map