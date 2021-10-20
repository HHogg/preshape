import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "video_svg__feather video_svg__feather-video" },
        React.createElement("path", { d: "M23 7l-7 5 7 5V7z" }),
        React.createElement("rect", { x: 1, y: 5, width: 15, height: 14, rx: 2, ry: 2 })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Video.js.map