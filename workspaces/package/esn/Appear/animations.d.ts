import { Transition, Variant } from 'framer-motion';
import { TypeAnimation } from './Appear';
declare const variants: {
    [key in TypeAnimation]: (originX?: number, originY?: number) => {
        transition?: Transition;
        variants: {
            hidden: Variant;
            visible: Variant;
        };
    };
};
export default variants;
//# sourceMappingURL=animations.d.ts.map