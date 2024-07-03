import CanvasObject from "./CanvasObject";

const pi2 = Math.PI * 2;

export default class Circle extends CanvasObject {
  constructor(obj) {
    super(obj);
    const { radius } = obj;
    this.radius = radius;
    this.type = "circle";
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.coor.x, this.coor.y, this.radius, 0, pi2);
    if (this.fillColor !== "#000") this.ctx.fillStyle = this.fillColor;
    if (this.strokeColor !== "#000") this.ctx.strokeStyle = this.strokeColor;
    if (this.isStroked) this.ctx.stroke();
    if (this.isFilled) this.ctx.fill();
  }
}
