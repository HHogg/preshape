import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "pie-chart_svg__feather pie-chart_svg__feather-pie-chart" },
        React.createElement("path", { d: "M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=PieChart.js.map