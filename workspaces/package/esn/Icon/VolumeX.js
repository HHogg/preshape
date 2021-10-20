import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "volume-x_svg__feather volume-x_svg__feather-volume-x" },
        React.createElement("path", { d: "M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=VolumeX.js.map