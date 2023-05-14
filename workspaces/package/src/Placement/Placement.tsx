import React, { FC, PropsWithChildren, createContext, useContext } from 'react';
import usePlacement, {
  UsePlacementOptions,
  UsePlacementResult,
} from './usePlacement';

/**
 * The placement context.
 */
export interface PlacementProps extends UsePlacementOptions {}

const PlacementContext = createContext<UsePlacementResult>(
  {} as UsePlacementResult
);

export const usePlacementContext = () => {
  return useContext(PlacementContext);
};

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
