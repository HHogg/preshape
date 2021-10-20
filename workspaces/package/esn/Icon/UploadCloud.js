import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "upload-cloud_svg__feather upload-cloud_svg__feather-upload-cloud" },
        React.createElement("path", { d: "M16 16l-4-4-4 4M12 12v9" }),
        React.createElement("path", { d: "M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" }),
        React.createElement("path", { d: "M16 16l-4-4-4 4" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=UploadCloud.js.map