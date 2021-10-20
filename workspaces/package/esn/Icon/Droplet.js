import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "droplet_svg__feather droplet_svg__feather-droplet" },
        React.createElement("path", { d: "M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Droplet.js.map