import * as React from 'react';
import { createPortal } from 'react-dom';
import * as PopperJS from 'popper.js';
import { Popper, PopperProps, PopperArrowProps } from 'react-popper';
import classnames from 'classnames';
import { useEventListener } from '../hooks';
import Appear from '../Appear/Appear';
import Base, { BaseProps } from '../Base/Base';
import './Placement.css';
import { PlacementManagerContext } from './PlacementManager';

const getAnimationOrigin = (placement: PopperJS.Placement): {
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

export const PlacementArrowPropsContext = React.createContext<PopperArrowProps>({
  ref: () => {},
  style: {},
});

export interface PlacementProps extends BaseProps {
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
  /** Flag that toggles the visible of the placed content. */
  visible?: boolean;
}

const Placement: React.FC<PlacementProps> = (props) => {
  const {
    children,
    options,
    onClose: onCloseControlled,
    placement,
    unrender,
    visible: visibleControlled = true,
    ...rest
  } = props;

  const {
    onClose: onCloseUncontrolled,
    visible: visibleUncontrolled,
  } = React.useContext(PlacementManagerContext);

  const onClose = onCloseUncontrolled || onCloseControlled;
  const visible = visibleUncontrolled === undefined ? visibleControlled : visibleUncontrolled;

  const [render, setRender] = React.useState(unrender ? visible : true);
  const ref = React.useRef<HTMLElement | null>();

  React.useEffect(() => {
    if (visible && unrender) {
      setRender(true);
    }
  }, [visible]);

  useEventListener(document, 'pointerup', (event) => {
    if (onClose && visible && ref.current && !ref.current.contains(event.target as Node)) {
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

  return createPortal(
    <Popper { ...options }
        innerRef={ (el) => ref.current = el || null }
        placement={ placement }>
      { ({ arrowProps, placement, ref, style }) => (
        <PlacementArrowPropsContext.Provider value={ arrowProps }>
          <Base { ...rest }
              className={ classnames('Placement', `Placement--${placement}`) }
              ref={ ref }
              style={ style }>
            <Appear { ...getAnimationOrigin(placement) }
                animation="Pop"
                onAnimationComplete={ handleExited }
                visible={ visible }>
              { children }
            </Appear>
          </Base>
        </PlacementArrowPropsContext.Provider>
      ) }
    </Popper>,
  document.body);
};

export default Placement;
