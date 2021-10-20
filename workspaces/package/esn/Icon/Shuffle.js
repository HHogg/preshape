import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "shuffle_svg__feather shuffle_svg__feather-shuffle" },
        React.createElement("path", { d: "M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Shuffle.js.map