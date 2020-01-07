import * as React from 'react';
import { createPortal } from 'react-dom';
import { Popper, PopperProps, PopperArrowProps } from 'react-popper';
import classnames from 'classnames';
import Base, { BaseProps } from '../Base/Base';
import './Placement.css';

export const PlacementArrowPropsContext = React.createContext<PopperArrowProps>({
  ref: () => {},
  style: {},
});

export interface PlacementProps extends BaseProps {
  options?: PopperProps;
  placement?: 'bottom' | 'left' | 'right' | 'top';
}

const Placement: React.FC<PlacementProps> = (props) => {
  const { children, placement, ...rest } = props;

  return createPortal(
    <Popper placement={ placement }>
      { ({ arrowProps, placement, ref, style }) => (
        <PlacementArrowPropsContext.Provider value={ arrowProps }>
          <Base { ...rest }
              className={ classnames('Placement', `Placement--${placement}`) }
              ref={ ref }
              style={ style }>
            { children }
          </Base>
        </PlacementArrowPropsContext.Provider>
      ) }
    </Popper>,
  document.body);
};

export default Placement;
