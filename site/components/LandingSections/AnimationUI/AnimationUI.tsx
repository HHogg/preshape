/* eslint-disable */

import * as React from 'react';
import { motion, Variant, Variants } from 'framer-motion';
import { useIntersectionObserver, Flex, Icon } from 'preshape';
import AnimationBar from './AnimationBar';
import AnimationAlert from './AnimationAlert';
import AnimationSidebar from './AnimationSidebar';
import AnimationTable from './AnimationTable';


type AnimKey = 'init' | 'scene1' | 'scene2' | 'scene3';
export type AnimVariants = Variants & { [key in AnimKey]?: Variant };

const AnimSVG: AnimVariants = {
  scene1: {
    transition: {
      staggerChildren: 0.25,
      staggerDirection: -1,
    }
  },
}

const AnimNextMap: { [key in AnimKey]?: AnimKey } = {
  init: 'scene1',
  scene1: 'scene2',
  scene2: 'scene3',
  scene3: 'scene1',
};

export default () => {
  const refTimer = React.useRef<number>();
  const [isInView, ref] = useIntersectionObserver();
  const [animate, setAnimate] = React.useState<AnimKey>(isInView ? 'scene1' : 'init');

  React.useEffect(() => {
    if (isInView){
      setAnimate('scene1');
    } else {
      setAnimate('init')
    }

    return () => {
      if (refTimer.current) {
        window.clearTimeout(refTimer.current);
      }
    };
  }, [isInView]);

  const handleAnimationComplete = () => {
    const next = AnimNextMap[animate];
    if (next) setAnimate(next);
  };

  return (
    <Flex
        backgroundColor="background-shade-2"
        borderSize="x2"
        direction="vertical"
        gap="x2"
        padding="x3">
      <Flex
          direction="horizontal"
          gap="x1"
          grow>
        <Flex>
          <Icon
              name="Circle"
              size="1rem" />
        </Flex>

        <Flex>
          <Icon
              name="Circle"
              size="1rem" />
        </Flex>

        <Flex>
          <Icon
              name="Circle"
              size="1rem" />
        </Flex>
      </Flex>

      <Flex
          borderSize="x2"
          ref={ ref }>
        <motion.svg
            animate={ animate }
            initial="init"
            onAnimationComplete={ handleAnimationComplete }
            variants={ AnimSVG }
            style={ { 'overflow': 'hidden' } }
            viewBox="0 0 768 384">
          <g
            id="animations_svg__animations"
            stroke="none"
            strokeWidth={1}
            fill="none"
            fillRule="evenodd"
          >
            <path
              id="animations_svg__Background"
              stroke="var(--color-background--shade-1)"
              fill="var(--color-background--shade-2)"
              d="M0 0h768v384H0z"
            />

            <AnimationAlert />
            <AnimationTable />
            <AnimationSidebar />
            <AnimationBar />
          </g>
        </motion.svg>
      </Flex>
    </Flex>
  );
}
