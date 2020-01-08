import { useEffect } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
function useEventListener<E extends Window, K extends keyof WindowEventMap>(el: E | null | undefined, type: K, handler: (evnt: WindowEventMap[K]) => void, watch?: any[]): void;
function useEventListener<E extends Document, K extends keyof DocumentEventMap>(el: E | null | undefined, type: K, handler: (evt: DocumentEventMap[K]) => void, watch?: any[]): void;
function useEventListener<E extends HTMLElement, K extends keyof HTMLElementEventMap>(el: E | null | undefined, type: K, handler: (evt: HTMLElementEventMap[K]) => void, watch?: any[]): void;
function useEventListener(el: any, type: string, handler: any, watch?: any[]) {
  useEffect(() => {
    if (el) {
      el.addEventListener(type, handler);
    }

    return () => {
      if (el) {
        el.removeEventListener(type, handler);
      }
    };
  }, watch || []);
}

export default useEventListener;
