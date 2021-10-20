import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "shopping-cart_svg__feather shopping-cart_svg__feather-shopping-cart" },
        React.createElement("circle", { cx: 9, cy: 21, r: 1 }),
        React.createElement("circle", { cx: 20, cy: 21, r: 1 }),
        React.createElement("path", { d: "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=ShoppingCart.js.map