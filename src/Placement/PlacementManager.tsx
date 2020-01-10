import * as React from 'react';
import { Manager } from 'react-popper';

export interface PlacementManagerProps {
  children: React.ReactNode;
}

const PlacementManager: React.FC<PlacementManagerProps> = (props) => {
  return (
    <Manager { ...props } />
  );
};

export default PlacementManager;
