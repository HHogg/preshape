import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "divide-circle_svg__feather divide-circle_svg__feather-divide-circle" },
        React.createElement("path", { d: "M8 12h8M12 16h0M12 8h0" }),
        React.createElement("circle", { cx: 12, cy: 12, r: 10 })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=DivideCircle.js.map