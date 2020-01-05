import * as React from 'react' ;
import { Flex } from 'preshape';
import ThemeIcon from '../ThemeIcon/ThemeIcon';

const animations = ['Color', 'Spin', 'Fade'];

interface Props {
  time: number;
}

export default (props: Props) => {
  return (
    <React.Fragment>
      { animations.map((animation) => (
        <Flex
            alignChildren="middle"
            borderSize="x2"
            direction="horizontal"
            grow
            key={ animation }
            padding="x4">
          <div
              className={ `AnimationExample__${animation}` }
              style={ { animationDuration: `${props.time}ms` } }>
            <ThemeIcon size="2rem" />
          </div>
        </Flex>
      )) }
    </React.Fragment>
  );
};
