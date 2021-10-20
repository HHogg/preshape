import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "scissors_svg__feather scissors_svg__feather-scissors" },
        React.createElement("circle", { cx: 6, cy: 6, r: 3 }),
        React.createElement("circle", { cx: 6, cy: 18, r: 3 }),
        React.createElement("path", { d: "M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Scissors.js.map