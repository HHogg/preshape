import React from 'react';
import { usePlacementContext } from './Placement';

/**
 * A component that renders one of two elements based on the open state of the
 * placement.
 */
export interface PlacementOpenConditionProps {
  /**
   * The content to render when the placement is open
   */
  opened: React.ReactElement;
  /**
   * The content to render when the placement is closed
   */
  closed: React.ReactElement;
}

const PlacementOpenCondition: React.FC<PlacementOpenConditionProps> = ({
  opened,
  closed,
}) => {
  const { context } = usePlacementContext();
  return context.open ? opened : closed;
};

export default PlacementOpenCondition;
