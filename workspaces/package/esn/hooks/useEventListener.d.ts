declare function useEventListener<E extends Window, K extends keyof WindowEventMap>(el: E | null | undefined, type: K, handler: (evnt: WindowEventMap[K]) => void, watch?: any[], options?: boolean | AddEventListenerOptions): void;
declare function useEventListener<E extends Document, K extends keyof DocumentEventMap>(el: E | null | undefined, type: K, handler: (evt: DocumentEventMap[K]) => void, watch?: any[], options?: boolean | AddEventListenerOptions): void;
declare function useEventListener<E extends HTMLElement, K extends keyof HTMLElementEventMap>(el: E | null | undefined, type: K, handler: (evt: HTMLElementEventMap[K]) => void, watch?: any[], options?: boolean | AddEventListenerOptions): void;
export default useEventListener;
//# sourceMappingURL=useEventListener.d.ts.map