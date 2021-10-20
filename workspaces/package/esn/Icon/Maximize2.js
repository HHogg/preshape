import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "maximize-2_svg__feather maximize-2_svg__feather-maximize-2" },
        React.createElement("path", { d: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Maximize2.js.map