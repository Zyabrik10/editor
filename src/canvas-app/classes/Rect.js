import CanvasObject from "./CanvasObject";

export default class Rect extends CanvasObject {
  constructor(obj) {
    super(obj);
    const { width, height } = obj;
    this.width = width;
    this.height = height;
    this.type = "rect";
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.coor.x, this.coor.y, this.width, this.height);
    if (this.fillColor !== "#000") this.ctx.fillStyle = this.fillColor;
    if (this.strokeColor !== "#000") this.ctx.strokeStyle = this.strokeColor;
    if (this.isStroked) this.ctx.stroke();
    if (this.isFilled) this.ctx.fill();
  }
}
