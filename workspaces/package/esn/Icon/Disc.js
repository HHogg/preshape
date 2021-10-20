import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "disc_svg__feather disc_svg__feather-disc" },
        React.createElement("circle", { cx: 12, cy: 12, r: 10 }),
        React.createElement("circle", { cx: 12, cy: 12, r: 3 })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Disc.js.map