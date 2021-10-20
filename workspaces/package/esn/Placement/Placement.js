import * as React from 'react';
import { createPortal } from 'react-dom';
import { Popper } from 'react-popper';
import classnames from 'classnames';
import { useEventListener } from '../hooks';
import Appear from '../Appear/Appear';
import Box from '../Box/Box';
import { PlacementManagerContext } from './PlacementManager';
import './Placement.css';
const getAnimationOrigin = (placement) => {
    switch (placement) {
        case 'bottom':
        case 'bottom-end':
        case 'bottom-start': {
            return {
                originX: 0.5,
                originY: 0,
            };
        }
        case 'left':
        case 'left-end':
        case 'left-start': {
            return {
                originX: 1,
                originY: 0.5,
            };
        }
        case 'right':
        case 'right-end':
        case 'right-start': {
            return {
                originX: 0,
                originY: 0.5,
            };
        }
        case 'top':
        case 'top-end':
        case 'top-start': {
            return {
                originX: 0.5,
                originY: 1,
            };
        }
        default: {
            return {
                originX: 0.5,
                originY: 0.5,
            };
        }
    }
};
export const PlacementArrowPropsContext = React.createContext({
    ref: () => { },
    style: {},
});
const Placement = (props) => {
    const { animation = 'Pop', children, minWidth, options, onClose: onCloseControlled, placement, unrender, style, visible: visibleControlled = true, ...rest } = props;
    const { onClose: onCloseUncontrolled, referenceNode, visible: visibleUncontrolled, } = React.useContext(PlacementManagerContext);
    const onClose = onCloseUncontrolled || onCloseControlled;
    const visible = visibleUncontrolled === undefined ? visibleControlled : visibleUncontrolled;
    const placementMinWidth = (minWidth === 'reference' && referenceNode) ? referenceNode.clientWidth : minWidth;
    const [render, setRender] = React.useState(unrender ? visible : true);
    const ref = React.useRef();
    React.useEffect(() => {
        if (visible && unrender) {
            setRender(true);
        }
    }, [visible]);
    useEventListener(document, 'pointerup', (event) => {
        if (onClose && visible && ref.current && !ref.current.contains(event.target)) {
            onClose();
        }
    }, [onClose, visible]);
    if (!render) {
        return null;
    }
    const handleExited = () => {
        if (unrender && !visible) {
            setRender(false);
        }
    };
    return createPortal(React.createElement(Popper, Object.assign({}, options, { innerRef: (el) => ref.current = el || null, placement: placement }), ({ arrowProps, placement, ref, style: stylePopper }) => (React.createElement(PlacementArrowPropsContext.Provider, { value: arrowProps },
        React.createElement(Box, Object.assign({}, rest, { className: classnames('Placement', `Placement--${placement}`), minWidth: placementMinWidth, ref: ref, style: { ...stylePopper, ...style } }),
            React.createElement(Appear, Object.assign({}, getAnimationOrigin(placement), { animation: animation, onAnimationComplete: handleExited, visible: visible }), children))))), document.body);
};
export default Placement;
//# sourceMappingURL=Placement.js.map