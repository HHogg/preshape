import React, {
  MouseEvent,
  PointerEvent,
  FC,
  ReactNode,
  Ref,
  useContext,
} from 'react';
import { Reference } from 'react-popper';
import { PlacementManagerContext } from './PlacementManager';

export type PlacementReferenceChildren = (
  props: {
    onPointerEnter?: (event: PointerEvent) => void;
    onPointerLeave?: (event: PointerEvent) => void;
    onClick?: (event: MouseEvent) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: Ref<any>;
  },
  state: {
    visible?: boolean;
  }
) => ReactNode;

export interface PlacementReferenceProps {
  /**
   * A render callback function that passes on the ref
   * property, and event handlers to be added to the
   * React element that is the target.
   */
  children: PlacementReferenceChildren;
}

const PlacementReference: FC<PlacementReferenceProps> = (props) => {
  const { children, ...rest } = props;
  const { onClick, onPointerEnter, onPointerLeave, setReferenceNode, visible } =
    useContext(PlacementManagerContext);

  return (
    <Reference {...rest} innerRef={setReferenceNode}>
      {(props) =>
        children(
          {
            ...props,
            onPointerEnter,
            onPointerLeave,
            onClick,
          },
          {
            visible,
          }
        )
      }
    </Reference>
  );
};

export default PlacementReference;
