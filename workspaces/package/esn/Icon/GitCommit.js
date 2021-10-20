import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "git-commit_svg__feather git-commit_svg__feather-git-commit" },
        React.createElement("circle", { cx: 12, cy: 12, r: 4 }),
        React.createElement("path", { d: "M1.05 12H7M17.01 12h5.95" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=GitCommit.js.map