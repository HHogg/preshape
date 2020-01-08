import * as React from 'react';
import { createPortal } from 'react-dom';
import { Popper, PopperProps, PopperArrowProps } from 'react-popper';
import classnames from 'classnames';
import { useEventListener } from '../hooks';
import Appear from '../Appear/Appear';
import Base, { BaseProps } from '../Base/Base';
import './Placement.css';

export const PlacementArrowPropsContext = React.createContext<PopperArrowProps>({
  ref: () => {},
  style: {},
});

export interface PlacementProps extends BaseProps {
  onClose?: () => void;
  options?: PopperProps;
  placement?: 'bottom' | 'left' | 'right' | 'top';
  unrender?: boolean;
  visible?: boolean;
}

const Placement: React.FC<PlacementProps> = (props) => {
  const { children, onClose, placement, unrender, visible = true, ...rest } = props;
  const [render, setRender] = React.useState(unrender ? visible : true);
  const ref = React.useRef<HTMLElement | null>();

  React.useEffect(() => {
    if (visible && unrender) {
      setRender(true);
    }
  }, [visible]);

  useEventListener(document, 'click', (event) => {
    if (onClose && ref.current && !ref.current.contains(event.target as Node)) {
      onClose();
    }
  }, [onClose]);

  if (!render) {
    return null;
  }

  const handleExited = () => {
    if (unrender && !visible) {
      setRender(false);
    }
  };

  return createPortal(
    <Popper innerRef={ (el) => ref.current = el || null } placement={ placement }>
      { ({ arrowProps, placement, ref, style }) => (
        <PlacementArrowPropsContext.Provider value={ arrowProps }>
          <Base { ...rest }
              className={ classnames('Placement', `Placement--${placement}`) }
              ref={ ref }
              style={ style }>
            <Appear
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
