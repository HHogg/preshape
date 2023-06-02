import {
  FloatingArrow,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react';
import { forwardRef } from 'react';
import { Appear, AppearProps } from '../Appear/Appear';
import { Box, BoxProps } from '../Box/Box';
import { ARROW_HEIGHT, ARROW_WIDTH } from './usePlacement';
import { usePlacementContext } from './usePlacementContext';

/**
 * The content to be displayed in the placement.
 */
export interface PlacementContentProps extends BoxProps {
  /**
   * The animation to use when the content appears
   */
  animation?: AppearProps['animation'];
  /**
   * Whether or not to show the arrow
   *
   * @default false
   */
  withArrow?: boolean;
}

export const PlacementContent = forwardRef<
  HTMLDivElement,
  PlacementContentProps
>((props, propRef) => {
  const {
    animation = 'Pop',
    backgroundColor,
    borderRadius = 'x3',
    children,
    padding,
    paddingHorizontal,
    paddingVertical,
    withArrow,
    ...rest
  } = props;
  const { arrowRef, context, getFloatingProps, open } = usePlacementContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!context.open) {
    return null;
  }

  return (
    <FloatingPortal>
      <Box
        {...rest}
        {...getFloatingProps({})}
        ref={ref}
        style={context.floatingStyles}
      >
        <Appear
          animation={animation}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          className="Placement__content"
          padding={padding}
          paddingHorizontal={paddingHorizontal}
          paddingVertical={paddingVertical}
          visible={open}
        >
          <Box
            textColor={
              // Just to make TS Happy
              backgroundColor === 'overlay' ? undefined : backgroundColor
            }
          >
            {withArrow && (
              <FloatingArrow
                context={context}
                fill="currentColor"
                ref={arrowRef}
                height={ARROW_HEIGHT}
                width={ARROW_WIDTH}
              />
            )}
          </Box>
          {children}
        </Appear>
      </Box>
    </FloatingPortal>
  );
});
