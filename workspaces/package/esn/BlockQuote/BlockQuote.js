import * as React from 'react';
import Text from '../Text/Text';
import './BlockQuote.css';
const BlockQuote = (props, ref) => {
    return (React.createElement(Text, Object.assign({ paddingHorizontal: "x6", paddingVertical: "x1" }, props, { className: "BlockQuote", ref: ref, tag: "blockquote", textColor: "text-shade-3" })));
};
export default React.forwardRef(BlockQuote);
//# sourceMappingURL=BlockQuote.js.map