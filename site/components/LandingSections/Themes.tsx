import * as React from 'react' ;
import { Variants, Variant } from 'framer-motion';
import {
  transitionTimingFunction,
  transitionTimeSlow,
  Flex,
  Icon,
  Text,
  Motion,
  ThemeSwitcher,
} from 'preshape';
import SiteContext from '../SiteContext';
import LandingSection, { Props } from '../Landing/LandingSection';

interface ThemeVariants extends Variants {
  day: Variant;
  night: Variant;
}

const VariantsStars: ThemeVariants = {
  day: {},
  night: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
};

const VariantsStar = (x: number, y: number): ThemeVariants => ({
  day: {
    opacity: 0,
    scale: 0,
    x: x,
    y: y,
  },
  night: {
    opacity: 1,
    scale: 1,
  },
});

const VariantsClouds: ThemeVariants = {
  night: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.05,
    },
  },
  day: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.05,
    },
  },
};

const VariantsCloud = (d: number, x: number, y: number): ThemeVariants => ({
  day: {
    scaleX: d,
    x: x,
    y: y,
  },
  night: {
    x: x + (400 * d),
  },
});

const clouds: { dir: number; size: number; x: number; y: number }[] = [
  { dir: 1, size: 48, x: 60, y: 20 },
  { dir: -1, size: 36, x: -140, y: -30 },
  { dir: -1, size: 24, x: -120, y: 40 },
  { dir: 1, size: 24, x: 120, y: -60 },
];

const stars: { size: number; x: number; y: number }[] = [
  { size: 16, x: -40, y: 45 },
  { size: 12, x: 50, y: -40 },
  { size: 16, x: -80, y: -70 },
  { size: 8, x: -150, y: -30 },
  { size: 6, x: -130, y: 10 },
  { size: 12, x: 150, y: 0 },
  { size: 12, x: 100, y: 10 },
];

export default (props: Props) => {
  const { onChangeTheme, theme } = React.useContext(SiteContext);

  return (
    <LandingSection { ...props }>
      <Motion
          alignChildren="middle"
          animate={ theme }
          container
          direction="horizontal"
          height="10rem"
          initial="day"
          margin="x8"
          overflow="hidden">
        <Flex>
          <ThemeSwitcher
              onChange={ onChangeTheme }
              size={ 32 }
              theme={ theme } />
        </Flex>

        <Motion absolute="center" variants={ VariantsStars }>
          { stars.map(({ size, x, y }, index) => (
            <Motion
                absolute="center"
                key={ index }
                variants={ VariantsStar(x, y) }>
              <Motion
                  animate={ { opacity: [1, 0, 1] } }
                  initial={ { opacity: 1 } }
                  transition={ {
                    delay: Math.random(),
                    duration: transitionTimeSlow / 1000,
                    ease: transitionTimingFunction,
                    repeatDelay: Math.random() * (5 - 2) + 2,
                    yoyo: Infinity,
                  } }>
                <Icon name="Star" size={ `${size}px` } />
              </Motion>
            </Motion>
          )) }
        </Motion>

        <Motion absolute="center" variants={ VariantsClouds }>
          { clouds.map(({ dir, size, x, y }, index) => (
            <Motion
                absolute="center"
                key={ index }
                variants={ VariantsCloud(dir, x, y) }>
              <Motion
                  animate={ { y: 5 } }
                  initial={ { y: -5 } }
                  transition={ {
                    delay: index,
                    duration: 2,
                    ease: 'linear',
                    yoyo: Infinity,
                  } }>
                <Icon name="Cloud" size={ `${size}px` } />
              </Motion>
            </Motion>
          )) }
        </Motion>
      </Motion>

      <Text margin="x4">
        Dark themes help to lower the luminance of a UI and help with strain on
        a user's eyes. A "Night" theme is provided for occassions where a user
        is spending longer periods of time concentrating on the content or when
        a UI is being used in lower lighting conditions.
      </Text>
    </LandingSection>

  );
};
