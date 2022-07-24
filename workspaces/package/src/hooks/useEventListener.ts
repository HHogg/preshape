import { useEffect } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
function useEventListener<E extends Window, K extends keyof WindowEventMap>(
  el: E | null | undefined,
  type: K,
  handler: (evnt: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): void;
function useEventListener<E extends Document, K extends keyof DocumentEventMap>(
  el: E | null | undefined,
  type: K,
  handler: (evt: DocumentEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): void;
function useEventListener<
  E extends HTMLElement,
  K extends keyof HTMLElementEventMap
>(
  el: E | null | undefined,
  type: K,
  handler: (evt: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): void;
function useEventListener(
  el: any,
  type: string,
  handler: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
) {
  useEffect(() => {
    if (el) {
      el.addEventListener(type, handler, options);
    }

    return () => {
      if (el) {
        el.removeEventListener(type, handler, options);
      }
    };
  }, [type, handler, options]);
}

export default useEventListener;
