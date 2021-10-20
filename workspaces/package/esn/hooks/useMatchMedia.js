/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
const getListeners = (queries, handler) => queries.map((query) => {
    const media = `(min-width: ${query})`;
    const listener = window.matchMedia(media);
    listener.addListener(handler);
    return { listener, media, query };
});
const getMatchQueryIndex = (queries, listeners) => {
    for (let i = queries.length; i--;) {
        if (listeners[i].listener.matches) {
            return queries.indexOf(listeners[i].query);
        }
    }
    return -1;
};
const removeListeners = (listeners, handler) => {
    listeners.forEach(({ listener }) => {
        listener.removeListener(handler);
    });
};
export default (queries) => {
    const handleQueryChange = (event) => {
        const listener = listeners.current.find(({ media }) => media === event.media);
        if (listener && hasMounted.current) {
            setHitIndex(getMatchQueryIndex(queries, listeners.current));
        }
    };
    const hasMounted = useRef(false);
    const listeners = useRef(getListeners(queries, handleQueryChange));
    const [hitIndex, setHitIndex] = useState(getMatchQueryIndex(queries, listeners.current));
    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
        }
        else {
            removeListeners(listeners.current, handleQueryChange);
            listeners.current = getListeners(queries, handleQueryChange);
            setHitIndex(getMatchQueryIndex(queries, listeners.current));
        }
        return () => {
            removeListeners(listeners.current, handleQueryChange);
        };
    }, [...queries]);
    useEffect(() => () => {
        hasMounted.current = false;
    }, []);
    function match(pattern, fallback) {
        if (typeof pattern === 'string') {
            const patternIndex = queries.indexOf(pattern);
            return patternIndex >= 0 && patternIndex <= hitIndex;
        }
        for (let i = hitIndex + 1; i--;) {
            if (queries[i] in pattern) {
                return pattern[queries[i]];
            }
        }
        return fallback;
    }
    return match;
};
//# sourceMappingURL=useMatchMedia.js.map