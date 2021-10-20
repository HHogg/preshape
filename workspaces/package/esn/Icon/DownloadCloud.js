import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "download-cloud_svg__feather download-cloud_svg__feather-download-cloud" },
        React.createElement("path", { d: "M8 17l4 4 4-4M12 12v9" }),
        React.createElement("path", { d: "M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=DownloadCloud.js.map