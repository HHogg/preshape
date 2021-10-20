import * as React from 'react';
import { Reference } from 'react-popper';
import { PlacementManagerContext } from './PlacementManager';
const PlacementReference = (props) => {
    const { children, ...rest } = props;
    const { onPointerUp, onPointerEnter, onPointerLeave, setReferenceNode, visible, } = React.useContext(PlacementManagerContext);
    return (React.createElement(Reference, Object.assign({}, rest, { innerRef: setReferenceNode }), (props) => children({
        ...props,
        onPointerEnter,
        onPointerLeave,
        onPointerUp,
    }, {
        visible,
    })));
};
export default PlacementReference;
//# sourceMappingURL=PlacementReference.js.map