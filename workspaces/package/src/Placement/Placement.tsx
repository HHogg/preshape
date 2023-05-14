import { FC, PropsWithChildren } from 'react';
import usePlacement, { UsePlacementOptions } from './usePlacement';
import { PlacementContext } from './usePlacementContext';

/**
 * The placement context.
 */
export interface PlacementProps extends UsePlacementOptions {}

const Placement: FC<PropsWithChildren<PlacementProps>> = (props) => {
  const { children, ...rest } = props;
  const placement = usePlacement(rest);

  return (
    <PlacementContext.Provider value={placement}>
      {children}
    </PlacementContext.Provider>
  );
};

export default Placement;
