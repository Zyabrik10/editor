import CanvasObject from "./CanvasObject";

export default class Line extends CanvasObject {
  constructor(obj) {
    super(obj);
    const { coor2 } = obj;
    this.coor2 = coor2;
    this.type = "line";
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.coor.x, this.coor.y);
    this.ctx.lineTo(this.coor2.x, this.coor2.y);
    if (this.strokeColor !== "#000") this.ctx.strokeStyle = this.strokeColor;
    if (this.isStroked) this.ctx.stroke();
  }
}
