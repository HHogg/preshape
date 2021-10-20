interface Rect {
  height: number;
  width: number;
  x: number;
  y: number;
}

export default class PlacementReferenceElement {
  clientRect: ClientRect = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
  };

  constructor(rect: Rect) {
    this.update(rect);
  }

  update({ height, width, x, y }: Rect) {
    this.clientRect = {
      top: y,
      left: x,
      right: x + width,
      bottom: y + height,
      width: width,
      height: height,
    };
  }

  getBoundingClientRect() {
    return this.clientRect;
  }

  get clientWidth() {
    return this.getBoundingClientRect().width;
  }

  get clientHeight() {
    return this.getBoundingClientRect().height;
  }
}
