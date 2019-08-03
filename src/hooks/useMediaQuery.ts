/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';

interface MatchPatternConfig {
  [key: string]: any;
}

interface Listener {
  listener: MediaQueryList;
  media: string;
  query: string;
}

type Handler = (e: MediaQueryListEvent) => void;

const getListeners = (queries: string[], handler: Handler) => queries.map((query) => {
  const media = `(min-width: ${query})`;
  const listener = window.matchMedia(media);

  listener.addListener(handler);

  return { listener, media, query };
});

const getMatchQueryIndex = (queries: string[], listeners: Listener[]) => {
  for (let i = queries.length; i--;) {
    if (listeners[i].listener.matches) {
      return queries.indexOf(listeners[i].query);
    }
  }

  return -1;
};

const removeListeners = (listeners: Listener[], handler: Handler) => {
  listeners.forEach(({ listener }) => {
    listener.removeListener(handler);
  });
};

export default (queries: string[]) => {
  const handleQueryChange = (event: MediaQueryListEvent) => {
    const listener = listeners.current.find(({ media }) => media === event.media);

    if (listener && hasMounted.current) {
      setHitIndex(getMatchQueryIndex(queries, listeners.current));
    }
  };

  const hasMounted = useRef(false);
  const listeners = useRef<Listener[]>(getListeners(queries, handleQueryChange));
  const [hitIndex, setHitIndex] = useState(getMatchQueryIndex(queries, listeners.current));

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
    } else {
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

  function match(pattern: string, fallback?: never): boolean;
  function match(pattern: MatchPatternConfig, fallback?: string): any;
  function match(pattern: string | MatchPatternConfig, fallback?: string): any {
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
