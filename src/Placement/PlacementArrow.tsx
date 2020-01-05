import * as React from 'react';
import Base, { BaseProps } from '../Base/Base';
import { PlacementArrowPropsContext } from './Placement';

export interface PlacementArrowProps extends BaseProps {}

const PlacementArrow: React.FC<PlacementArrowProps> = (props) => {
  return (
    <PlacementArrowPropsContext.Consumer>
      { ({ ref, style }) => (
        <Base { ...props }
            className="Placement__arrow"
            ref={ ref }
            style={ style } />
      ) }
    </PlacementArrowPropsContext.Consumer>
  );
};

export default PlacementArrow;
