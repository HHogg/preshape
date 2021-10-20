import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "archive_svg__feather archive_svg__feather-archive" },
        React.createElement("path", { d: "M21 8v13H3V8M1 3h22v5H1zM10 12h4" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Archive.js.map