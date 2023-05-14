import { FC, ReactElement } from 'react';
import { usePlacementContext } from './usePlacementContext';

/**
 * A component that renders one of two elements based on the open state of the
 * placement.
 */
export interface PlacementOpenConditionProps {
  /**
   * The content to render when the placement is open
   */
  opened: ReactElement;
  /**
   * The content to render when the placement is closed
   */
  closed: ReactElement;
}

export const PlacementOpenCondition: FC<PlacementOpenConditionProps> = ({
  opened,
  closed,
}) => {
  const { context } = usePlacementContext();
  return context.open ? opened : closed;
};
