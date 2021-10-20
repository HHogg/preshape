import * as React from 'react';
import Placement from '../Placement/Placement';
import PlacementArrow from '../Placement/PlacementArrow';
import PlacementContent from '../Placement/PlacementContent';
import PlacementManager from '../Placement/PlacementManager';
import PlacementReference from '../Placement/PlacementReference';
import Text from '../Text/Text';
const Tooltip = (props, ref) => {
    const { children, content, trigger = 'hover', ...rest } = props;
    return (React.createElement(PlacementManager, { trigger: trigger },
        React.createElement(PlacementReference, null, children),
        React.createElement(Placement, Object.assign({}, rest),
            React.createElement(PlacementArrow, { backgroundColor: "text-shade-1" }),
            React.createElement(PlacementContent, { backgroundColor: "text-shade-1", borderRadius: "x1", paddingHorizontal: "x3", paddingVertical: "x2", ref: ref, textColor: "background-shade-1" },
                React.createElement(Text, { align: "middle", size: "x2", strong: true }, content)))));
};
export default React.forwardRef(Tooltip);
//# sourceMappingURL=Tooltip.js.map