import * as React from 'react';
import { Box } from 'preshape';
const Icon = (props, ref) => {
    const { size = '1rem', ...rest } = props;
    return React.createElement(Box, Object.assign({}, rest, { className: "Icon", height: size, ref: ref, tag: "svg", viewBox: "0 0 24 24", width: size }), React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "mic_svg__feather mic_svg__feather-mic" },
        React.createElement("path", { d: "M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" }),
        React.createElement("path", { d: "M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" })));
};
export default React.forwardRef(Icon);
//# sourceMappingURL=Mic.js.map