import {
  Children,
  PropsWithChildren,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';
import { usePlacementContext } from './usePlacementContext';
import { useMergeRefs } from '@floating-ui/react';

/**
 * The reference element for the placement.
 */
export interface PlacementReferenceProps {}

export const PlacementReference = forwardRef<
  HTMLDivElement,
  PropsWithChildren<PlacementReferenceProps>
>(({ children }, propRef) => {
  const child = Children.only(children);
  const { context, getReferenceProps } = usePlacementContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  if (!isValidElement(child)) {
    console.error(
      'PlacementReference only accepts a single valid React element'
    );
    return null;
  }

  return cloneElement(
    child,
    getReferenceProps({
      ...child.props,
      ref,
      'data-state': context.open ? 'open' : 'closed',
    })
  );
});
