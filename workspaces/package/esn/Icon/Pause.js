import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "pause_svg__feather pause_svg__feather-pause" },
        React.createElement("path", { d: "M6 4h4v16H6zM14 4h4v16h-4z" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Pause.js.map