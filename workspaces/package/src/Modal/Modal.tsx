import { forwardRef, PointerEvent, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Appear, TypeAnimation } from '../Appear/Appear';
import { Box, BoxProps } from '../Box/Box';
import { TypeColor } from '../types';
import useIsModalVisible from './useIsModalVisible';
import { ModalContext } from './useModalContext';
import './Modal.css';

/**
 * The containing component for all the other Modal components.
 * This component contains the unpadded dialog box as well as
 * an overlay, animations and behaviour to disable body scroll when
 * it is visible.
 */
export interface ModalProps extends Omit<BoxProps, 'size'> {
  /**
   * Animation for the Modal window. See Appear component.
   *
   * @default "Fade"
   */
  animation?: TypeAnimation;
  /**
   * Extends the initial height of the modal to
   * be the full height of the viewport
   */
  fullscreen?: boolean;
  /**
   * A flag to ignore visibility management by ModalManager
   */
  ignoreModalManager?: boolean;
  /**
   * Sets the background color of the overlay that sits
   * under the modal and on top of the main UI.
   *
   * @default "overlay"
   */
  overlayBackgroundColor?: TypeColor;
  /**
   * Flag to enable/disable clicking on the overlay to close the modal.
   *
   * @default true
   */
  overlayBackgroundCloseOnClick?: boolean;
  /**
   * An optional callback that when provided will be
   * called when clicking on the visible overlay area
   * and when clicking on the cross icon inside the
   * ModalHeader.
   */
  onClose?: (event: PointerEvent<HTMLElement>) => void;
  /**
   * Called once the modal has finished animating out and
   * has been removed from the DOM.
   */
  onCloseAnimationComplete?: () => void;
  /**
   * Unrenders the modal when not visible
   *
   * @defaults true
   */
  unrender?: boolean;
  /**
   * The visible state of the modal. When the visibility
   * is set to false, the content will be removed from the
   * DOM.
   */
  visible: boolean;
}

export const Modal = forwardRef<any, ModalProps>((props, ref) => {
  const {
    animation = 'Fade',
    backgroundColor = 'background-shade-1',
    borderColor = 'background-shade-3',
    borderRadius = 'x3',
    borderSize = 'x1',
    children,
    fullscreen,
    ignoreModalManager,
    maxWidth,
    onClose,
    onCloseAnimationComplete,
    margin,
    overlayBackgroundColor = 'overlay',
    overlayBackgroundCloseOnClick = true,
    paddingHorizontal = 'x8',
    paddingVertical = 'x6',
    unrender = true,
    visible,
    ...rest
  } = props;

  const visibleManaged = useIsModalVisible(visible);
  const [render, setRender] = useState(visible);
  const refModal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      setRender(true);
      document.body.classList.add('Modal__body-open');
    } else {
      document.body.classList.remove('Modal__body-open');
    }

    return () => {
      document.body.classList.remove('Modal__body-open');
    };
  }, [visible]);

  useEffect(() => {
    if (!visible && unrender) {
      setRender(false);
    } else {
      setRender(true);
    }
  }, [visible, unrender]);

  const handleOnAnimateComplete = () => {
    if (!visible && unrender) {
      setRender(false);
    }

    onCloseAnimationComplete?.();
  };

  const actuallyVisible = ignoreModalManager ? visible : visibleManaged;

  if (!render) {
    return null;
  }

  return (
    <>
      {createPortal(
        <ModalContext.Provider
          value={{
            onClose,
            borderColor,
            borderSize,
            paddingHorizontal,
            paddingVertical,
          }}
        >
          <Box
            {...rest}
            alignChildren="middle"
            fixed="edge-to-edge"
            flex="vertical"
            padding={margin}
            ref={ref}
            style={{ pointerEvents: actuallyVisible ? undefined : 'none' }}
          >
            <Appear
              absolute="edge-to-edge"
              animation="Fade"
              backgroundColor={overlayBackgroundColor}
              onAnimationComplete={handleOnAnimateComplete}
              onPointerUp={overlayBackgroundCloseOnClick ? onClose : undefined}
              visible={actuallyVisible}
            />

            <Appear
              animation={animation}
              backgroundColor={backgroundColor}
              borderColor={borderColor}
              borderRadius={borderRadius}
              borderSize={borderSize}
              className="Modal"
              container
              flex="vertical"
              grow={fullscreen}
              maxHeight="100vh"
              maxWidth={(fullscreen && '100%') || maxWidth}
              overflow="auto"
              ref={refModal}
              shrink
              visible={actuallyVisible}
            >
              {children}
            </Appear>
          </Box>
        </ModalContext.Provider>,
        document.body
      )}
    </>
  );
});
