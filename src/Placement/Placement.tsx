import * as React from 'react';
import { Popper, PopperArrowProps } from 'react-popper';
import classnames from 'classnames';
import './Placement.css';

export const PlacementArrowPropsContext = React.createContext<PopperArrowProps>({
  ref: () => {},
  style: {},
});

export interface PlacementProps extends Popper {}

const Placement: React.FC<PlacementProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Popper { ...rest }>
      { ({ arrowProps, placement, ref, style }) => (
        <PlacementArrowPropsContext.Provider value={ arrowProps }>
          <div
              className={ classnames('Placement', `Placement--${placement}`) }
              ref={ ref }
              style={ style }>
            { children }
          </div>
        </PlacementArrowPropsContext.Provider>
      ) }
    </Popper>
  );
};

export default Placement;
