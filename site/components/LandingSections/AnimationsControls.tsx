import * as React from 'react' ;
import {
  transitionTimeSlow,
  transitionTimeBase,
  transitionTimeFast,
  Code,
  Text,
} from 'preshape';
import LinkBox from '../LinkBox/LinkBox';

const times = [{
  name: 'Slow',
  variable: '--transition-time--slow',
  time: transitionTimeSlow,
}, {
  name: 'Base',
  variable: '--transition-time--base',
  time: transitionTimeBase,
}, {
  name: 'Fast',
  variable: '--transition-time--fast',
  time: transitionTimeFast,
}];

interface Props {
  time: number;
  onChange: (time: number) => void;
}

export default (props: Props) => {
  return (
    <React.Fragment>
      { times.map(({ name, variable, time }) => (
        <LinkBox
            active={ time == props.time }
            key={ time }
            margin="x2"
            onClick={ () => props.onChange(time) }
            padding="x2">
          <Text size="x1" strong>{ name } ({ time }ms)</Text>
          <Code size="x1" weak>var({ variable })</Code>
        </LinkBox>
      )) }
    </React.Fragment>
  );
};
