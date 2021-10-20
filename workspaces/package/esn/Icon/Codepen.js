import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "codepen_svg__feather codepen_svg__feather-codepen" },
        React.createElement("path", { d: "M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" }),
        React.createElement("path", { d: "M22 8.5l-10 7-10-7" }),
        React.createElement("path", { d: "M2 15.5l10-7 10 7M12 2v6.5" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Codepen.js.map