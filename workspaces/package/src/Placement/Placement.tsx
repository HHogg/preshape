import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import * as PopperJS from 'popper.js';
import { Popper, PopperProps, PopperArrowProps } from 'react-popper';
import classnames from 'classnames';
import { useEventListener } from '../hooks';
import Appear, { AppearProps } from '../Appear/Appear';
import Box, { Attributes, BoxProps } from '../Box/Box';
import { PlacementManagerContext } from './PlacementManager';
import './Placement.css';

const getAnimationOrigin = (
  placement: PopperJS.Placement
): {
  originX: 0 | 0.5 | 1;
  originY: 0 | 0.5 | 1;
} => {
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

type PopperOptions = Omit<PopperProps, 'children'>;

export const PlacementArrowPropsContext = createContext<PopperArrowProps>({
  ref: () => {},
  style: {},
});

export interface PlacementProps
  extends BoxProps,
    Pick<AppearProps, 'animation'> {
  /**
   * The minimum width of the Placement element. This can be a standard
   * CSS value or a keyword of 'reference', which will apply the width
   * of the reference element.
   */
  minWidth?: 'reference' | number | string;
  /**
   * When provided this enables an event listener for clicks onto the document,
   * when clicks occur outside the placed element, the callback will be
   * called.
   */
  onClose?: () => void;
  /**
   * Options that are passed onto PopperJS.
   *
   * @Reference false
   */
  options?: PopperOptions;
  /** The desired side of placement, note it may differ depending on the environment. */
  placement?: 'bottom' | 'left' | 'right' | 'top';
  /** Flag that enables the unredering of the content when not visible. */
  unrender?: boolean;
  /**
   * The width of the Placement element. This can be a standard
   * CSS value or a keyword of 'reference', which will apply the width
   * of the reference element.
   */
  width?: 'reference' | number | string;
  /** Flag that toggles the visible of the placed content. */
  visible?: boolean;
}

const Placement: FC<Attributes<HTMLDivElement, PlacementProps>> = (props) => {
  const {
    animation = 'Pop',
    children,
    minWidth,
    options,
    onClose: onCloseControlled,
    placement,
    unrender,
    style,
    visible: visibleControlled,
    width,
    ...rest
  } = props;

  const {
    onClose: onCloseUncontrolled,
    referenceNode,
    visible: visibleUncontrolled,
  } = useContext(PlacementManagerContext);

  const visible =
    visibleControlled === undefined ? visibleUncontrolled : visibleControlled;

  const placementMinWidth =
    minWidth === 'reference' && referenceNode
      ? referenceNode.clientWidth
      : minWidth;

  const placementWidth =
    width === 'reference' && referenceNode ? referenceNode.clientWidth : width;

  const [render, setRender] = useState(unrender ? visible : true);
  const ref = useRef<HTMLElement | null>();

  useEffect(() => {
    if (visible && unrender) {
      setRender(true);
    }
  }, [visible]);

  useEventListener(
    document,
    'pointerup',
    useCallback(
      (event) => {
        if (
          visible &&
          ref.current &&
          !ref.current.contains(event.target as Node)
        ) {
          onCloseControlled?.();
          onCloseUncontrolled?.();
        }
      },
      [visible]
    )
  );

  if (!render) {
    return null;
  }

  const handleAnimationChange = (scheduleUpdate: () => void) => () => {
    if (unrender && !visible) {
      setRender(false);
    } else {
      scheduleUpdate();
    }
  };

  return createPortal(
    <Popper
      {...options}
      innerRef={(el) => (ref.current = el || null)}
      placement={placement}
    >
      {({ arrowProps, placement, ref, scheduleUpdate, style: stylePopper }) => (
        <PlacementArrowPropsContext.Provider value={arrowProps}>
          <Box
            {...rest}
            className={classnames('Placement', `Placement--${placement}`)}
            minWidth={placementMinWidth}
            ref={ref}
            style={{
              ...stylePopper,
              ...style,
              pointerEvents: visible ? undefined : 'none',
            }}
            width={placementWidth}
          >
            <Appear
              {...getAnimationOrigin(placement)}
              animation={animation}
              onAnimationStart={handleAnimationChange(scheduleUpdate)}
              onAnimationComplete={handleAnimationChange(scheduleUpdate)}
              visible={visible}
            >
              {children}
            </Appear>
          </Box>
        </PlacementArrowPropsContext.Provider>
      )}
    </Popper>,
    document.body
  );
};

export default Placement;
