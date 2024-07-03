import { options } from "./options";
import mouse from "./mouse-state";
import { Rect, Circle, Line } from "./classes";

const objects = [];

export function onUp() {
  mouse.isDown = false;
  objects.forEach((e) => {
    if (e.isChoosed) e.isChoosed = false;
  });
  mouse.isDrawing = false;
  console.log(objects);
}

export function onDown({ offsetX, offsetY }) {
  mouse.isDown = true;
  mouse.downCoor.x = offsetX;
  mouse.downCoor.y = offsetY;
  mouse.isDrawing = true;
}

export function onMove({ offsetX, offsetY }) {
  mouse.moveCoor.x = offsetX;
  mouse.moveCoor.y = offsetY;
}

export function setup(canvas, ctx) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

export function update(canvas, ctx) {
  const { option } = options;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (mouse.isDown && mouse.isDrawing && option) {
    let obj;
    mouse.isDrawing = false;
    switch (option) {
      case "rect":
        obj = new Rect({
          ctx: ctx,
          coor: {
            x: mouse.downCoor.x,
            y: mouse.downCoor.y,
          },  
          width: mouse.moveCoor.x - mouse.downCoor.x,
          height: mouse.moveCoor.y - mouse.downCoor.y,
          isChoosed: true,
        });
        break;
      case "circle":
        obj = new Circle({
          ctx: ctx,
          coor: {
            x: mouse.downCoor.x,
            y: mouse.downCoor.y,
          },
          radius: Math.abs(mouse.moveCoor.x - mouse.downCoor.x),
          isChoosed: true,
        });
        break;
      case "line":
        obj = new Line({
          ctx: ctx,
          coor: {
            x: mouse.downCoor.x,
            y: mouse.downCoor.y,
          },
          coor2: {
            x: mouse.moveCoor.x,
            y: mouse.moveCoor.y,
          },
          isChoosed: true,
        });
        break;
      case "draw":
        console.log("draw");
        break;
      default:
    }
    objects.push(obj);
  }

  objects.forEach((e) => {
    if (e.isChoosed === true) {
      switch (e.type) {
        case "rect":
          e.width = mouse.moveCoor.x - mouse.downCoor.x;
          e.height = mouse.moveCoor.y - mouse.downCoor.y;
          break;
        case "circle":
          e.radius = Math.abs(mouse.moveCoor.x - mouse.downCoor.x);
          break;
        case "line":
          e.coor2.x = mouse.moveCoor.x;
          e.coor2.y = mouse.moveCoor.y;
          break;
        default:
      }
    }
    e.draw();
  });

  window.requestAnimationFrame(update.bind(undefined, canvas, ctx, options));
}
