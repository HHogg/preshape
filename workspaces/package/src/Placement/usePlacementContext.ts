import { createContext, useContext } from 'react';
import { UsePlacementResult } from './usePlacement';

export const PlacementContext = createContext<UsePlacementResult>(
  {} as UsePlacementResult
);

export const usePlacementContext = () => {
  return useContext(PlacementContext);
};
