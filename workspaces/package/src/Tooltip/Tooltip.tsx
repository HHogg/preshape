import React, { forwardRef, RefForwardingComponent } from 'react';
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
import Text, { TextProps } from '../Text/Text';

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
   *
   */
  size?: TextProps['size'];
  /**
   *
   */
  strong?: TextProps['strong'];
  /**
   * The visibility trigger type.
   */
  trigger?: TypePlacementTrigger;
}

const Tooltip: RefForwardingComponent<
  HTMLDivElement,
  Attributes<HTMLDivElement, TooltipProps>
> = (props, ref) => {
  const {
    backgroundColor = 'text-shade-1',
    children,
    content,
    maxWidth,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    size = 'x3',
    textColor = 'background-shade-1',
    trigger = 'hover',
    ...rest
  } = props;

  return (
    <PlacementManager trigger={trigger}>
      <PlacementReference>{children}</PlacementReference>

      <Placement {...rest}>
        <PlacementArrow backgroundColor={backgroundColor} />
        <PlacementContent
          backgroundColor={backgroundColor}
          borderRadius="x1"
          maxWidth={maxWidth}
          paddingHorizontal={paddingHorizontal}
          paddingVertical={paddingVertical}
          ref={ref}
          textColor={textColor}
        >
          <Text align="middle" size={size} strong>
            {content}
          </Text>
        </PlacementContent>
      </Placement>
    </PlacementManager>
  );
};

export default forwardRef(Tooltip);
