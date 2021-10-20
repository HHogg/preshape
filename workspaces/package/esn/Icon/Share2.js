import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "share-2_svg__feather share-2_svg__feather-share-2" },
        React.createElement("circle", { cx: 18, cy: 5, r: 3 }),
        React.createElement("circle", { cx: 6, cy: 12, r: 3 }),
        React.createElement("circle", { cx: 18, cy: 19, r: 3 }),
        React.createElement("path", { d: "M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Share2.js.map