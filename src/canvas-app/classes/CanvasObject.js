export default class CanvasObject {
  constructor({
    ctx,
    coor,
    isFilled = false,
    isStroked = true,
    fillColor = "#000",
    strokeColor = "#000",
    isChoosed = false,
    type = "",
  }) {
    this.coor = coor;
    this.isFilled = isFilled;
    this.isStroked = isStroked;
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.ctx = ctx;
    this.isChoosed = isChoosed;
    this.type = type;
  }
}
