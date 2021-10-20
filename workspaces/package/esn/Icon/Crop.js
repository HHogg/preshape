import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "crop_svg__feather crop_svg__feather-crop" },
        React.createElement("path", { d: "M6.13 1L6 16a2 2 0 002 2h15" }),
        React.createElement("path", { d: "M1 6.13L16 6a2 2 0 012 2v15" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Crop.js.map