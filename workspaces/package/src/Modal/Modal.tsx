import classNames from 'classnames';
import { forwardRef, PointerEvent, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Appear, TypeAnimation } from '../Appear/Appear';
import { Box, BoxProps } from '../Box/Box';
import { useMatchMedia } from '../hooks';
import { TypeColor } from '../types';
import './Modal.css';
import useIsModalVisible from './useIsModalVisible';
import { ModalContext, ModalPaddings, ModalSize } from './useModalContext';

/**
 * The containing component for all the other Modal components.
 * This component contains the unpadded dialog box as well as
 * an overlay, animations, behaviour to disable body scroll when
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
   * The maximum width of the dialog box.
   *
   * @default "auto"
   */
  maxWidth?: string;
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
   * Set the size of the modal, increasing the space around
   * the content accordingly.
   *
   * @default "x2"
   */
  size?: ModalSize;
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
    borderRadius = 'x3',
    children,
    fullscreen,
    ignoreModalManager,
    maxWidth = 'auto',
    onClose,
    onCloseAnimationComplete,
    margin,
    overlayBackgroundColor = 'overlay',
    overlayBackgroundCloseOnClick = true,
    size = 'x2',
    unrender = true,
    visible,
    ...rest
  } = props;

  const visibleManaged = useIsModalVisible(visible);
  const [render, setRender] = useState(visible);
  const refModal = useRef<HTMLDivElement>(null);
  const match = useMatchMedia([maxWidth]);
  const isMaxWidthEnabled = maxWidth !== 'auto';
  const isGreaterThanMaxWidth = !isMaxWidthEnabled || match(maxWidth);
  const classes = classNames('Modal', {
    [`Modal--size-${size}`]: size,
  });

  const { horizontal: paddingHorizontal, vertical: paddingVertical } =
    ModalPaddings[size];

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
          value={{ onClose, paddingHorizontal, paddingVertical }}
        >
          <Box
            {...rest}
            alignChildren="middle"
            fixed="edge-to-edge"
            flex="vertical"
            padding={isGreaterThanMaxWidth ? margin : undefined}
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
              borderRadius={isGreaterThanMaxWidth ? borderRadius : undefined}
              className={classes}
              container
              flex="vertical"
              grow={fullscreen || (isMaxWidthEnabled && !match(maxWidth))}
              maxHeight="100vh"
              maxWidth={
                (isMaxWidthEnabled && maxWidth) ||
                (fullscreen && '100%') ||
                undefined
              }
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
