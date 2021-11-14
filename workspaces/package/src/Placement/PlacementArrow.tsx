import React, { FC, useContext } from 'react';
import Box, { BoxProps } from '../Box/Box';
import { PlacementArrowPropsContext } from './Placement';

export interface PlacementArrowProps extends BoxProps {}

const PlacementArrow: FC<PlacementArrowProps> = (props) => {
  const { ref, style } = useContext(PlacementArrowPropsContext);

  return (
    <Box {...props} className="Placement__arrow" ref={ref} style={style} />
  );
};

export default PlacementArrow;
