import * as React from 'react';
import { createPortal } from 'react-dom';
import { useMatchMedia } from '../hooks';
import Box from '../Box/Box';
import Appear from '../Appear/Appear';
import './Modal.css';
import classNames from 'classnames';
export const ModalContext = React.createContext({});
const Modal = (props, ref) => {
    const { animation = 'Fade', backgroundColor = 'background-shade-1', children, fullscreen, maxWidth = 'auto', onClose, margin, overlayBackgroundColor = 'overlay', size = 'x2', visible, ...rest } = props;
    const [render, setRender] = React.useState(props.visible);
    const refModal = React.useRef(null);
    const match = useMatchMedia([maxWidth]);
    const isMaxWidthEnabled = maxWidth !== 'auto';
    const classes = classNames('Modal', {
        [`Modal--size-${size}`]: size,
    });
    React.useEffect(() => {
        if (visible) {
            setRender(true);
            document.body.classList.add('Modal__body-open');
        }
        else {
            document.body.classList.remove('Modal__body-open');
        }
        return () => {
            document.body.classList.remove('Modal__body-open');
        };
    }, [visible]);
    const handleOnAnimateComplete = () => {
        if (!visible) {
            setRender(false);
        }
    };
    if (!render) {
        return null;
    }
    return createPortal(React.createElement(ModalContext.Provider, { value: { onClose } },
        React.createElement(Box, Object.assign({}, rest, { alignChildren: "middle", fixed: "edge-to-edge", flex: "vertical", padding: (!isMaxWidthEnabled || match(maxWidth)) ? margin : 'x0', ref: ref }),
            React.createElement(Appear, { absolute: "edge-to-edge", animation: "Fade", backgroundColor: overlayBackgroundColor, onAnimationComplete: handleOnAnimateComplete, onPointerUp: onClose, visible: visible }),
            React.createElement(Appear, { animation: animation, backgroundColor: backgroundColor, borderRadius: "x3", className: classes, container: true, flex: "vertical", grow: fullscreen || (isMaxWidthEnabled && !match(maxWidth)), maxHeight: "100vh", maxWidth: (isMaxWidthEnabled && maxWidth) ||
                    (fullscreen && '100%') || undefined, ref: refModal, scrollable: true, shrink: true, visible: visible }, children))), document.body);
};
export default React.forwardRef(Modal);
//# sourceMappingURL=Modal.js.map