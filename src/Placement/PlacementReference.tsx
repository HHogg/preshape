import * as React from 'react';
import { Reference } from 'react-popper';
import { PlacementManagerContext } from './PlacementManager';

export type PlacementReferenceChildren = (props: {
  onPointerEnter?: (event: React.PointerEvent) => void;
  onPointerLeave?: (event: React.PointerEvent) => void;
  onPointerUp?: (event: React.PointerEvent) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: React.Ref<any>;
}) => React.ReactNode

export interface PlacementReferenceProps {
  /**
   * A render callback function that passes on the ref
   * property, and event handlers to be added to the
   * React element that is the target.
   */
  children: PlacementReferenceChildren;
}

const PlacementReference: React.FC<PlacementReferenceProps> = (props) => {
  const { children, ...rest } = props;
  const {
    onPointerUp,
    onPointerEnter,
    onPointerLeave,
    setReferenceNode,
    visible,
  } = React.useContext(PlacementManagerContext);

  return (
    <Reference { ...rest } innerRef={ setReferenceNode }>
      { (props) => children({
        ...props,
        onPointerEnter,
        onPointerLeave,
        onPointerUp,
      }) }
    </Reference>
  );
};

export default PlacementReference;
