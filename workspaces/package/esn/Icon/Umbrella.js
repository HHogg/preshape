import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "umbrella_svg__feather umbrella_svg__feather-umbrella" },
        React.createElement("path", { d: "M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Umbrella.js.map