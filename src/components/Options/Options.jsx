import css from "./Options.module.css";
import { options } from "../../canvas-app/options";
import { memo } from "react";

function Options() {
  function radioHandler(option) {
    return () => {
      options.option = option;
    };
  }

  return (
    <ul className={css["list"]}>
      <li>
        <label htmlFor="rect">Rect</label>
        <input
          id="rect"
          type="radio"
          name="canvas-option"
          onClick={radioHandler("rect")}
        />
      </li>
      <li>
        <label htmlFor="circle">Circle</label>
        <input
          id="circle"
          type="radio"
          name="canvas-option"
          onClick={radioHandler("circle")}
        />
      </li>
      <li>
        <label htmlFor="line">Line</label>
        <input
          id="line"
          type="radio"
          name="canvas-option"
          onClick={radioHandler("line")}
        />
      </li>
      <li>
        <label htmlFor="draw">Draw</label>
        <input
          id="draw"
          type="radio"
          name="canvas-option"
          onClick={radioHandler("draw")}
        />
      </li>
    </ul>
  );
}

export default memo(Options);
