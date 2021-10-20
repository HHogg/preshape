import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "arrow-right_svg__feather arrow-right_svg__feather-arrow-right" },
        React.createElement("path", { d: "M5 12h14M12 5l7 7-7 7" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=ArrowRight.js.map