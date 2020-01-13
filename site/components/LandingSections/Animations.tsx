import * as React from 'react' ;
import {
  transitionTimingFunction,
  transitionTimeBase,
  transitionTimeFast,
  transitionTimeSlow,
  Code,
  Grid,
  Text,
  Link,
  Flex,
} from 'preshape';
import AnimationUI from './AnimationUI/AnimationUI';
import LandingSection, { Props } from '../Landing/LandingSection';
import './Animations.css';

const timings = [{
  name: 'Fast',
  css: 'transition-time--fast',
  js: 'transitionTimeFast',
  value: transitionTimeFast,
}, {
  name: 'Base',
  css: 'transition-time--base',
  js: 'transitionTimeBase',
  value: transitionTimeBase,
}, {
  name: 'Slow',
  css: 'transition-time--slow',
  js: 'transitionTimeSlow',
  value: transitionTimeSlow,
}];

export default (props: Props) => {
  return (
    <LandingSection { ...props }>
      <AnimationUI />

      <Text margin="x4">
        Animations, when used functionally, are a great way to ease
        from one state to another and subtly provide an extended form of feedback that
        a state has changed.
      </Text>

      <Text margin="x4">
        The human brain is adept to idenitifying subtle inconsistencies (like
        noticing outo of sync audio on the TV), so a consistent approach to
        animations and transitions is important otherwise there is the risk of
        presenting unease and chaos.
      </Text>

      <Text margin="x4">
        Preshape provides a <Link to="/api/flex" underline>Flex</Link> wrapped <Link href="https://www.framer.com/motion/" target="Framer" underline>Framer Motion</Link> component
        for adding complex UI animations, and some simple CSS and Javascript variables
        for small component transitions.
      </Text>

      <Grid
          gap="x6"
          margin="x8"
          repeatWidthMin="240px">
        { timings.map(({ name, css, js, value }) => (
          <Flex key={ value }>
            <Text align="middle" strong>{ name } - { value }ms</Text>
            <Text align="middle" ellipsis size="x1"><Code>var(--{ css })</Code></Text>
            <Text align="middle" ellipsis size="x1"><Code>{ js }</Code></Text>
          </Flex>
        )) }
      </Grid>

      <Flex margin="x3">
        <Text align="middle" strong>Timing Function - ({ transitionTimingFunction.join(', ') })</Text>
        <Text align="middle" ellipsis size="x1"><Code>var(--transition-timing-function)</Code></Text>
        <Text align="middle" ellipsis size="x1"><Code>transitionTimingFunction</Code></Text>
      </Flex>
    </LandingSection>
  );
};
