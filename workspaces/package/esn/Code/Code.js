import * as React from 'react';
import Text from '../Text/Text';
const Code = (props, ref) => {
    return (React.createElement(Text, Object.assign({}, props, { monospace: true, ref: ref, tag: "code" })));
};
export default React.forwardRef(Code);
//# sourceMappingURL=Code.js.map