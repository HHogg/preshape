import * as React from 'react';
import Box from '../Box/Box';
import { PlacementArrowPropsContext } from './Placement';
const PlacementArrow = (props) => {
    return (React.createElement(PlacementArrowPropsContext.Consumer, null, ({ ref, style }) => (React.createElement(Box, Object.assign({}, props, { className: "Placement__arrow", ref: ref, style: style })))));
};
export default PlacementArrow;
//# sourceMappingURL=PlacementArrow.js.map