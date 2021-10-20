import { useEffect } from 'react';
function useEventListener(el, type, handler, watch, options) {
    useEffect(() => {
        if (el) {
            el.addEventListener(type, handler, options);
        }
        return () => {
            if (el) {
                el.removeEventListener(type, handler, options);
            }
        };
    }, watch || []);
}
export default useEventListener;
//# sourceMappingURL=useEventListener.js.map