
import React, { createContext } from 'react';
import { Popper, PopperArrowProps } from 'react-popper';
import classnames from 'classnames';
import './Placement.css';

export const PlacementArrowPropsContext = createContext<PopperArrowProps>({
  ref: () => {},
  style: {},
});

interface Props extends Popper {
  children: React.ReactNode;
}

const Placement: React.FunctionComponent<Props> = (props: Props) => {
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
