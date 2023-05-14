import React, { PropsWithChildren, forwardRef } from 'react';
import { usePlacementContext } from './Placement';
import { useMergeRefs } from '@floating-ui/react';

/**
 * The reference element for the placement.
 */
export interface PlacementReferenceProps {}

const PlacementReference: React.ForwardRefRenderFunction<
  HTMLDivElement,
  PropsWithChildren<PlacementReferenceProps>
> = ({ children }, propRef) => {
  const child = React.Children.only(children);
  const { context, getReferenceProps } = usePlacementContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  if (!React.isValidElement(child)) {
    console.error(
      'PlacementReference only accepts a single valid React element'
    );
    return null;
  }

  return React.cloneElement(
    child,
    getReferenceProps({
      ...child.props,
      ref,
      'data-state': context.open ? 'open' : 'closed',
    })
  );
};

export default forwardRef(PlacementReference);
