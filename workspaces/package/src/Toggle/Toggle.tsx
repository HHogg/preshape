import React, { forwardRef, RefForwardingComponent } from 'react';
import { Variants } from 'framer-motion';
import { transitionTimeFast, transitionTimingFunction } from '../variables';
import Box, { Attributes, BoxProps } from '../Box/Box';
import Motion from '../Motion/Motion';
import './Toggle.css';

const transition = {
  duration: transitionTimeFast / 1000,
  ease: transitionTimingFunction,
};

const variants: Variants = {
  false: {
    origin: 0.5,
    x: '0%',
  },
  true: {
    x: '100%',
  },
};

const variantOff: Variants = {
  false: {
    opacity: [0, 1],
  },
  true: {
    opacity: [1, 0],
  },
};

const variantOn: Variants = {
  false: {
    opacity: [1, 0],
  },
  true: {
    opacity: [0, 1],
  },
};

export interface ToggleProps extends BoxProps {
  /** Icon to show when the toggle is in an off state */
  iconOff?: JSX.Element;
  /** Icon to show when the toggle is in an on state */
  iconOn?: JSX.Element;
  /** Callback for when the value changes (provided with the new value) */
  onChange?: (value: boolean) => void;
  /** Size of the toggle (height) */
  size?: number;
  /** True/False value of the state of the toggle */
  value: boolean;
}

const Toggle: RefForwardingComponent<
  HTMLLabelElement,
  Attributes<HTMLLabelElement, ToggleProps>
> = (props, ref) => {
  const {
    backgroundColor = 'accent-shade-4',
    borderSize = 'x2',
    iconOff,
    iconOn,
    onChange,
    size = 16,
    value,
    ...rest
  } = props;

  const paddingAndBorder = 8; // TODO(hhogg): Do this better.
  const knobSize = size - paddingAndBorder;

  return (
    <Box {...rest} container flex="horizontal" ref={ref} tag="label">
      <input
        checked={value}
        className="Toggle__input"
        onChange={onChange && (() => onChange(!value))}
        type="checkbox"
      />

      <Motion
        animate={(!!value).toString()}
        backgroundColor={value ? backgroundColor : 'background-shade-3'}
        borderSize={borderSize}
        className="Toggle"
        clickable
        flex="vertical"
        grow
        height={size}
        initial="false"
        overflow="hidden"
        transition={transition}
        transitionProperty="background-color"
        width={size * 2 - paddingAndBorder}
      >
        <Box container flex="vertical" grow>
          <Motion
            absolute="top-left"
            backgroundColor="text-shade-1"
            borderRadius="full"
            className="Toggle__toggle"
            height={knobSize}
            textColor="background-shade-1"
            transition={transition}
            variants={variants}
            width={knobSize}
          >
            <Motion
              absolute="center"
              transition={transition}
              variants={variantOff}
            >
              {iconOff}
            </Motion>

            <Motion
              absolute="center"
              transition={transition}
              variants={variantOn}
            >
              {iconOn}
            </Motion>
          </Motion>
        </Box>
      </Motion>
    </Box>
  );
};

export default forwardRef(Toggle);
