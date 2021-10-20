import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "anchor_svg__feather anchor_svg__feather-anchor" },
        React.createElement("circle", { cx: 12, cy: 5, r: 3 }),
        React.createElement("path", { d: "M12 22V8M5 12H2a10 10 0 0020 0h-3" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Anchor.js.map