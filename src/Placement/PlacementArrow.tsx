import * as React from 'react';
import Box, { BoxProps } from '../Box/Box';
import { PlacementArrowPropsContext } from './Placement';

export interface PlacementArrowProps extends BoxProps {}

const PlacementArrow: React.FC<PlacementArrowProps> = (props) => {
  return (
    <PlacementArrowPropsContext.Consumer>
      { ({ ref, style }) => (
        <Box { ...props }
            className="Placement__arrow"
            ref={ ref }
            style={ style } />
      ) }
    </PlacementArrowPropsContext.Consumer>
  );
};

export default PlacementArrow;
