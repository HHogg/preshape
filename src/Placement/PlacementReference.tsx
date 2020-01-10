import * as React from 'react';
import { Reference } from 'react-popper';

export interface PlacementReferenceProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (props: { ref: React.Ref<any> }) => React.ReactNode;
}

const PlacementReference: React.FC<PlacementReferenceProps> = (props) => {
  return (
    <Reference { ...props } />
  );
};

export default PlacementReference;
