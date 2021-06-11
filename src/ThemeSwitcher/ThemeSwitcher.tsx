import * as React from 'react';
import { Variants } from 'framer-motion';
import { transitionTimeFast, transitionTimingFunction } from '../variables';
import Box, { Attributes, BoxProps, TypeTheme } from '../Box/Box';
import Icon from '../Icon/Icon';
import Motion from '../Motion/Motion';
import './ThemeSwitcher.css';

const transition = {
  duration: transitionTimeFast / 1000,
  ease: transitionTimingFunction,
};

const VariantsToggle: Variants = {
  day: {
    origin: 0.5,
    scale: 1.2,
    x: '0%',
  },
  night: {
    scale: 1.2,
    x: '100%',
  },
};

const VariantsIconSun: Variants = {
  day: {
    x: '0%',
    opacity: [0, 1, 1],
  },
  night: {
    x: '100%',
    opacity: [1, 0, 0, 0, 0],
  },
};

const VariantsIconMoon: Variants = {
  day: {
    x: '-100%',
    opacity: [1, 0, 0, 0, 0],
  },
  night: {
    x: '0%',
    opacity: [0, 1, 1],
  },
};


export interface ThemeSwitcherProps extends BoxProps {
  size?: number;
  onChange: (theme: TypeTheme) => void;
  theme: TypeTheme;
}

const ThemeControls: React.RefForwardingComponent<HTMLLabelElement, Attributes<HTMLLabelElement, ThemeSwitcherProps>> = (props, ref) => {
  const {
    onChange,
    size = 16,
    theme,
    ...rest
  } = props;

  return (
    <Box { ...rest }
        container
        flex="horizontal"
        ref={ ref }
        tag="label">
      <input
          checked={ theme === 'night' }
          className="ThemeSwitcher__input"
          onChange={ () => onChange(theme === 'night' ? 'day' : 'night') }
          type="checkbox" />

      <Motion
          animate={ theme }
          backgroundColor="background-shade-3"
          borderSize="x2"
          className="ThemeSwitcher"
          clickable
          container
          initial="day"
          overflow="hidden"
          transition={ transition }>
        <Motion
            absolute="top-left"
            borderRadius="full"
            className="ThemeSwitcher__toggle"
            style={ { padding: size / 8 } }
            transition={ transition }
            variants={ VariantsToggle }>
          <Icon name="Sun" size={ `${size}px` } />
        </Motion>

        <Box flex="horizontal" textColor="background-shade-1">
          <Motion
              style={ { padding: size / 8 } }
              transition={ transition }
              variants={ VariantsIconSun }>
            <Icon name="Sun" size={ `${size}px` } />
          </Motion>

          <Motion
              style={ { padding: size / 8 } }
              transition={ transition }
              variants={ VariantsIconMoon }>
            <Icon name="Moon" size={ `${size}px` } />
          </Motion>
        </Box>
      </Motion>
    </Box>
  );
};

export default React.forwardRef(ThemeControls);
