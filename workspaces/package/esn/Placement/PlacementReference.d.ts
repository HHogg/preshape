import * as React from 'react';
export declare type PlacementReferenceChildren = (props: {
    onPointerEnter?: (event: React.PointerEvent) => void;
    onPointerLeave?: (event: React.PointerEvent) => void;
    onPointerUp?: (event: React.PointerEvent) => void;
    ref: React.Ref<any>;
}, state: {
    visible?: boolean;
}) => React.ReactNode;
export interface PlacementReferenceProps {
    /**
     * A render callback function that passes on the ref
     * property, and event handlers to be added to the
     * React element that is the target.
     */
    children: PlacementReferenceChildren;
}
declare const PlacementReference: React.FC<PlacementReferenceProps>;
export default PlacementReference;
//# sourceMappingURL=PlacementReference.d.ts.map