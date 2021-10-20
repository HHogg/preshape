import * as React from 'react';
import animations from './animations';
import { transitionTimeFast } from '../variables';
import Motion from '../Motion/Motion';
const Appear = (props, ref) => {
    const { animation = 'FadeSlideUp', delay = 0, duration = transitionTimeFast, originX, originY, visible = true, visibleInitially = false, ...rest } = props;
    const variantsConfig = animations[animation];
    if (!variantsConfig) {
        return null;
    }
    const { transition, variants, } = animations[animation](originX, originY);
    return (React.createElement(Motion, Object.assign({}, rest, { animate: visible ? 'visible' : 'hidden', initial: visibleInitially ? 'visible' : 'hidden', key: animation, ref: ref, transition: props.transition || {
            ...transition,
            delay: delay / 1000,
            duration: duration / 1000,
        }, variants: variants })));
};
export default React.forwardRef(Appear);
//# sourceMappingURL=Appear.js.map