import * as React from 'react';
import { Attributes } from '../Box/Box';
import Placement, { PlacementProps } from '../Placement/Placement';
import PlacementArrow from '../Placement/PlacementArrow';
import PlacementContent from '../Placement/PlacementContent';
import PlacementManager, {
  TypePlacementTrigger,
} from '../Placement/PlacementManager';
import PlacementReference, {
  PlacementReferenceChildren,
} from '../Placement/PlacementReference';
import Text from '../Text/Text';

export interface TooltipProps extends PlacementProps {
  /**
   * A render callback function that passes on the ref
   * property, and event handlers to be added to the
   * React element that is the target.
   */
  children: PlacementReferenceChildren;
  /**
   * The content to be displayed in the tooltip.
   */
  content: string;

  /**
   * The visibility trigger type.
   */
  trigger?: TypePlacementTrigger;
}

const Tooltip: React.RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, TooltipProps>
> = (props, ref) => {
  const { children, content, trigger = 'hover', ...rest } = props;

  return (
    <PlacementManager trigger={trigger}>
      <PlacementReference>{children}</PlacementReference>

      <Placement {...rest}>
        <PlacementArrow backgroundColor="text-shade-1" />
        <PlacementContent
          backgroundColor="text-shade-1"
          borderRadius="x1"
          paddingHorizontal="x3"
          paddingVertical="x2"
          ref={ref}
          textColor="background-shade-1"
        >
          <Text align="middle" size="x3" strong>
            {content}
          </Text>
        </PlacementContent>
      </Placement>
    </PlacementManager>
  );
};

export default React.forwardRef(Tooltip);
