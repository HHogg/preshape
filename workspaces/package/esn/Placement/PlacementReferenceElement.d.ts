interface Rect {
    height: number;
    width: number;
    x: number;
    y: number;
}
export default class PlacementReferenceElement {
    clientRect: ClientRect;
    constructor(rect: Rect);
    update({ height, width, x, y }: Rect): void;
    getBoundingClientRect(): ClientRect;
    get clientWidth(): number;
    get clientHeight(): number;
}
export {};
//# sourceMappingURL=PlacementReferenceElement.d.ts.map