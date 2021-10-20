import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "git-pull-request_svg__feather git-pull-request_svg__feather-git-pull-request" },
        React.createElement("circle", { cx: 18, cy: 18, r: 3 }),
        React.createElement("circle", { cx: 6, cy: 6, r: 3 }),
        React.createElement("path", { d: "M13 6h3a2 2 0 012 2v7M6 9v12" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=GitPullRequest.js.map