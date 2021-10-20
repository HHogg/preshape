import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "monitor_svg__feather monitor_svg__feather-monitor" },
        React.createElement("rect", { x: 2, y: 3, width: 20, height: 14, rx: 2, ry: 2 }),
        React.createElement("path", { d: "M8 21h8M12 17v4" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Monitor.js.map