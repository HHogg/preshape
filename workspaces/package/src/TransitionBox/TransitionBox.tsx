import { forwardRef } from 'react';
import { AppearProps, Appear } from '../Appear/Appear';
import { Box } from '../Box/Box';
import { Motion } from '../Motion/Motion';
import { useResizeObserver } from '../hooks';

export interface TransitionBoxProps extends AppearProps {}

export const TransitionBox = forwardRef<HTMLDivElement, TransitionBoxProps>(
  (
    {
      alignChildren,
      alignChildrenHorizontal,
      alignChildrenVertical,
      backgroundColor,
      borderBottom,
      borderColor,
      borderLeft,
      borderRadius,
      borderRight,
      borderSize,
      borderStyle,
      borderTop,
      children,
      delay = 0,
      flex,
      gap,
      gapHorizontal,
      gapVertical,
      padding,
      paddingHorizontal,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingVertical,
      visible,
      style,
      ...rest
    },
    ref
  ) => {
    const [size, refResize] = useResizeObserver();

    return (
      <Appear {...rest} delay={delay} ref={ref} visible={visible}>
        <Box container>
          <Box absolute="center">
            <Motion
              backgroundColor={backgroundColor}
              borderBottom={borderBottom}
              borderColor={borderColor}
              borderLeft={borderLeft}
              borderRadius={borderRadius}
              borderRight={borderRight}
              borderSize={borderSize}
              borderStyle={borderStyle}
              borderTop={borderTop}
              height={size.height}
              style={{
                ...style,
                originX: 0.5,
                originY: 0,
              }}
              transition={{
                duration: 0.1,
              }}
              transitionProperty="background-color"
              width={size.width}
              layout
            />
          </Box>

          <Box
            borderRadius={borderRadius}
            container
            overflow="hidden"
            ref={refResize}
          >
            <Box
              alignChildren={alignChildren}
              alignChildrenHorizontal={alignChildrenHorizontal}
              alignChildrenVertical={alignChildrenVertical}
              flex={flex}
              gap={gap}
              gapHorizontal={gapHorizontal}
              gapVertical={gapVertical}
              padding={padding}
              paddingTop={paddingTop}
              paddingRight={paddingRight}
              paddingBottom={paddingBottom}
              paddingLeft={paddingLeft}
              paddingHorizontal={paddingHorizontal}
              paddingVertical={paddingVertical}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Appear>
    );
  }
);
