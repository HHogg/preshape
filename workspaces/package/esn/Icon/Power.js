import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "power_svg__feather power_svg__feather-power" },
        React.createElement("path", { d: "M18.36 6.64a9 9 0 11-12.73 0M12 2v10" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Power.js.map