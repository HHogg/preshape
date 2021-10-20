import * as React from 'react';
import { transitionTimeFast, transitionTimingFunction } from '../variables';
import Box from '../Box/Box';
import * as Icons from '../Icon';
import Motion from '../Motion/Motion';
import './ThemeSwitcher.css';
const transition = {
    duration: transitionTimeFast / 1000,
    ease: transitionTimingFunction,
};
const VariantsToggle = {
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
const VariantsIconSun = {
    day: {
        x: '0%',
        opacity: [0, 1, 1],
    },
    night: {
        x: '100%',
        opacity: [1, 0, 0, 0, 0],
    },
};
const VariantsIconMoon = {
    day: {
        x: '-100%',
        opacity: [1, 0, 0, 0, 0],
    },
    night: {
        x: '0%',
        opacity: [0, 1, 1],
    },
};
const ThemeControls = (props, ref) => {
    const { onChange, size = 16, theme, ...rest } = props;
    return (React.createElement(Box, Object.assign({}, rest, { container: true, flex: "horizontal", ref: ref, tag: "label" }),
        React.createElement("input", { checked: theme === 'night', className: "ThemeSwitcher__input", onChange: () => onChange(theme === 'night' ? 'day' : 'night'), type: "checkbox" }),
        React.createElement(Motion, { animate: theme, backgroundColor: "background-shade-3", borderSize: "x2", className: "ThemeSwitcher", clickable: true, container: true, initial: "day", overflow: "hidden", transition: transition },
            React.createElement(Motion, { absolute: "top-left", borderRadius: "full", className: "ThemeSwitcher__toggle", style: { padding: size / 8 }, transition: transition, variants: VariantsToggle },
                React.createElement(Icons.Sun, { size: `${size}px` })),
            React.createElement(Box, { flex: "horizontal", textColor: "background-shade-1" },
                React.createElement(Motion, { style: { padding: size / 8 }, transition: transition, variants: VariantsIconSun },
                    React.createElement(Icons.Sun, { name: "Sun", size: `${size}px` })),
                React.createElement(Motion, { style: { padding: size / 8 }, transition: transition, variants: VariantsIconMoon },
                    React.createElement(Icons.Moon, { name: "Moon", size: `${size}px` }))))));
};
export default React.forwardRef(ThemeControls);
//# sourceMappingURL=ThemeSwitcher.js.map