import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "cloud-lightning_svg__feather cloud-lightning_svg__feather-cloud-lightning" },
        React.createElement("path", { d: "M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" }),
        React.createElement("path", { d: "M13 11l-4 6h6l-4 6" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=CloudLightning.js.map