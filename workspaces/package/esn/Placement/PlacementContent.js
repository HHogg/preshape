import * as React from 'react';
import Box from '../Box/Box';
const PlacementContent = (props, ref) => {
    return (React.createElement(Box, Object.assign({}, props, { container: true, ref: ref })));
};
export default React.forwardRef(PlacementContent);
//# sourceMappingURL=PlacementContent.js.map