import * as React from 'react';
export declare type TypePlacementTrigger = 'click' | 'hover';
export declare const PlacementManagerContext: React.Context<{
    onClose?: (() => void) | undefined;
    onPointerEnter?: ((event: React.PointerEvent<Element>) => void) | undefined;
    onPointerLeave?: ((event: React.PointerEvent<Element>) => void) | undefined;
    onPointerUp?: ((event: React.PointerEvent<Element>) => void) | undefined;
    referenceNode: HTMLElement | null;
    setReferenceNode(referenceNode: HTMLElement | null): void;
    visible?: boolean | undefined;
}>;
export interface PlacementManagerProps {
    /**
     * @Ignore
     */
    children: React.ReactNode;
    /**
     * The control trigger that activates visibility control by
     * passing the matching event handlers onto the reference
     * element.
     */
    trigger?: TypePlacementTrigger;
}
declare const PlacementManager: React.FC<PlacementManagerProps>;
export default PlacementManager;
//# sourceMappingURL=PlacementManager.d.ts.map