import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "bluetooth_svg__feather bluetooth_svg__feather-bluetooth" },
        React.createElement("path", { d: "M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Bluetooth.js.map