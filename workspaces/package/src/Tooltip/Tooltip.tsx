import { ReactNode, forwardRef } from 'react';
import Placement, { PlacementProps } from '../Placement/Placement';
import {
  PlacementContent,
  PlacementContentProps,
} from '../Placement/PlacementContent';
import { PlacementReference } from '../Placement/PlacementReference';
import { UsePlacementTrigger } from '../Placement/usePlacement';
import { Text } from '../Text/Text';
import { useThemeContext } from '../ThemeSwitcher/useThemeContext';
import { themesOpposite } from '../variables';

export interface TooltipProps extends Omit<PlacementContentProps, 'content'> {
  /**
   * The content to be displayed in the tooltip.
   */
  content: ReactNode;
  /**
   * @default "top"
   */
  placement?: PlacementProps['placement'];
  /**
   * The visibility trigger type.
   *
   * @default "hover"
   */
  trigger?: UsePlacementTrigger;
  /** Flag that toggles the visible of the placed content. */
  visible?: boolean;
}

export const Tooltip = forwardRef<any, TooltipProps>((props, ref) => {
  const {
    backgroundColor = 'background-shade-1',
    children,
    content,
    paddingHorizontal = 'x3',
    paddingVertical = 'x2',
    placement = 'top',
    textColor = 'text-shade-1',
    theme: themeProp,
    trigger = 'hover',
    visible,
    ...rest
  } = props;

  const { theme: themeContext } = useThemeContext();
  const theme = themeProp ?? themeContext;
  const themeOpposite = themesOpposite[theme];

  return (
    <Placement open={visible} placement={placement} trigger={trigger}>
      <PlacementReference>{children}</PlacementReference>
      <PlacementContent
        {...rest}
        backgroundColor={backgroundColor}
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
        ref={ref}
        theme={themeOpposite}
        withArrow
      >
        <Text align="middle" size="x3" textColor={textColor} weight="x2">
          {content}
        </Text>
      </PlacementContent>
    </Placement>
  );
});
