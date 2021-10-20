import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "hash_svg__feather hash_svg__feather-hash" },
        React.createElement("path", { d: "M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Hash.js.map