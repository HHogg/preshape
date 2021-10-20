import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "mouse-pointer_svg__feather mouse-pointer_svg__feather-mouse-pointer" },
        React.createElement("path", { d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3zM13 13l6 6" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=MousePointer.js.map