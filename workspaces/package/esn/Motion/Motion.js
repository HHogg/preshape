import * as React from 'react';
import { motion } from 'framer-motion';
import omit from 'lodash.omit';
import Box from '../Box/Box';
const motionProps = [
    'animate',
    'initial',
    'onAnimationComplete',
    'onAnimationStart',
    'positionTransition',
    'transition',
    'variants',
    'whileHover',
    'whileTap',
];
const Motion = motion(React.forwardRef((props, ref) => React.createElement(Box, Object.assign({}, omit(props, motionProps), { ref: ref }))));
export default Motion;
//# sourceMappingURL=Motion.js.map