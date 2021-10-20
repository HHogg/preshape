import * as React from 'react';
import { Manager } from 'react-popper';
export const PlacementManagerContext = React.createContext({
    onPointerEnter: undefined,
    onPointerLeave: undefined,
    onPointerUp: undefined,
    referenceNode: null,
    setReferenceNode: () => { },
    visible: undefined,
});
const PlacementManager = (props) => {
    const { trigger, ...rest } = props;
    const [referenceNode, setReferenceNode] = React.useState(null);
    const [visible, setVisible] = React.useState(trigger && false);
    const onClose = trigger === undefined ? undefined : () => setVisible(false);
    const onPointerEnter = trigger === 'hover' ? () => setVisible(true) : undefined;
    const onPointerLeave = trigger === 'hover' ? () => setVisible(false) : undefined;
    const onPointerUp = trigger === 'click' ? () => setVisible(true) : undefined;
    React.useEffect(() => {
        if (trigger === undefined) {
            setVisible(undefined);
        }
    }, [trigger]);
    return (React.createElement(PlacementManagerContext.Provider, { value: {
            onClose,
            onPointerEnter,
            onPointerLeave,
            onPointerUp,
            referenceNode,
            setReferenceNode,
            visible,
        } },
        React.createElement(Manager, Object.assign({}, rest))));
};
export default PlacementManager;
//# sourceMappingURL=PlacementManager.js.map