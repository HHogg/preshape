import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "rewind_svg__feather rewind_svg__feather-rewind" },
        React.createElement("path", { d: "M11 19l-9-7 9-7v14zM22 19l-9-7 9-7v14z" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Rewind.js.map