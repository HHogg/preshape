export default class ToolbarTargetReference {
  update({ height, width, x, y }) {
    this.rect = {
      top: y,
      left: x,
      right: x + width,
      bottom: y + height,
      width: 0,
      height: 0,
    };
  }

  get clientWidth() {
    return this.rect.width;
  }

  get clientHeight() {
    return this.rect.height;
  }

  getBoundingClientRect() {
    return this.rect;
  }
}
