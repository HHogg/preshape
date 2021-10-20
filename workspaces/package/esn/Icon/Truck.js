import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "truck_svg__feather truck_svg__feather-truck" },
        React.createElement("path", { d: "M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" }),
        React.createElement("circle", { cx: 5.5, cy: 18.5, r: 2.5 }),
        React.createElement("circle", { cx: 18.5, cy: 18.5, r: 2.5 })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Truck.js.map