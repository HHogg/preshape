import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "zap_svg__feather zap_svg__feather-zap" },
        React.createElement("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Zap.js.map