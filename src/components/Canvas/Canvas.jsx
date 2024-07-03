import { memo, useEffect, useRef } from "react";
import { onDown, onMove, onUp } from "../../canvas-app/canvas";

function Canvas({ setup, update }) {
  const can = useRef(null);

  useEffect(() => {
    const canvas = can.current;
    const ctx = canvas.getContext("2d");

    setup(canvas, ctx);
    update(canvas, ctx);

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("mouseup", onUp);

    return () => {
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("mouseup", onUp);
    };
  }, [setup, update]);
  return <canvas ref={can}></canvas>;
}

export default memo(Canvas);
