import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "navigation-2_svg__feather navigation-2_svg__feather-navigation-2" },
        React.createElement("path", { d: "M12 2l7 19-7-4-7 4 7-19z" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Navigation2.js.map