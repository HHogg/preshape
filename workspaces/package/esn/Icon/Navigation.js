import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "navigation_svg__feather navigation_svg__feather-navigation" },
        React.createElement("path", { d: "M3 11l19-9-9 19-2-8-8-2z" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Navigation.js.map