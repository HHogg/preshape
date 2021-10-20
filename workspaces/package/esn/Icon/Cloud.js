import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "cloud_svg__feather cloud_svg__feather-cloud" },
        React.createElement("path", { d: "M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Cloud.js.map