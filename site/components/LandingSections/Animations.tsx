import * as React from 'react' ;
import {
  useMediaQuery,
  useResizeObserver,
  transitionTimeSlow,
  transitionTimingFunction,
  Base,
  Code,
  Flex,
  Text,
} from 'preshape';
import { widthMedium, widthSmall, RootContext } from '../Root';
import AnimationsControls from './AnimationsControls';
import AnimationsCurve from './AnimationsCurve';
import AnimationsIcons from './AnimationsIcons';
import LandingSection, { Props } from '../Landing/LandingSection';
import './Animations.css';

export default (props: Props) => {
  const { theme } = React.useContext(RootContext);
  const [time, setTime] = React.useState(transitionTimeSlow);
  const [size, ref] = useResizeObserver();
  const match = useMediaQuery([widthSmall, widthMedium]);

  return (
    <LandingSection { ...props }>
      <Flex direction="vertical" gap="x4" margin="x4">
        <Flex direction="horizontal" gap="x4">
          <Flex
              borderSize="x2"
              direction="vertical"
              gap="x4"
              grow
              padding="x4">
            <Flex
                borderSize="x2"
                className="CubicBezier__svg-container"
                container
                grow>
              <Base absolute="fullscreen" ref={ ref }>
                <AnimationsCurve { ...size }
                    theme={ theme }
                    time={ time } />
              </Base>
            </Flex>

            <Flex alignChildren="middle">
              <Text align="middle" margin="x1" size="x1" strong>
                cubic-bezier({ transitionTimingFunction.join(', ') })
              </Text>

              <Text align="middle" size="x1">
                <Code inline>var(--transition-timing-function)</Code>
              </Text>
            </Flex>
          </Flex>

          { match(widthSmall) && (
            <Flex direction="vertical" gap="x4" grow>
              <Flex direction={ match(widthMedium) ? 'horizontal' : 'vertical' } gap="x2" grow>
                <AnimationsIcons time={ time } />
              </Flex>

              { match(widthMedium) && (
                <Flex>
                  <AnimationsControls
                      onChange={ setTime }
                      time={ time } />
                </Flex>
              ) }
            </Flex>
          ) }
        </Flex>

        { !match(widthSmall) && (
          <Flex direction="horizontal" gap="x2">
            <AnimationsIcons time={ time } />
          </Flex>
        ) }

        { !match(widthMedium) && (
          <Flex>
            <AnimationsControls
                onChange={ setTime }
                time={ time } />
          </Flex>
        ) }
      </Flex>

      <Text margin="x4">
        Animations, when used functionally, are a great way to visually ease
        from one state to another and subtley provide an extended form of feedback that
        a state has changed.
      </Text>

      <Text margin="x4">
        The human brain is adept to idenitifying subtle inconsistencies (like
        noticing outo of sync audio on the TV), so a consistent approach to
        animations and transitions is important otherwise there is the risk of
        presenting chaos.
      </Text>
    </LandingSection>
  );
};
