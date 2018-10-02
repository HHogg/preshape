export default class PlacementReferenceElement {
  constructor(rect) {
    this.update(rect);
  }

  update({ height, width, x, y }) {
    this.rect = {
      top: y,
      left: x,
      right: x + width,
      bottom: y + height,
      width: width,
      height: height,
    };
  }

  getBoundingClientRect() {
    return this.rect;
  }

  get clientWidth() {
    return this.getBoundingClientRect().width;
  }

  get clientHeight() {
    return this.getBoundingClientRect().height;
  }
}
