import Canvas from "./components/Canvas/Canvas";
import Options from "./components/Options/Options";
import { update, setup } from "./canvas-app/canvas";

function App() {
  return (
    <>
      <Options />
      <Canvas update={update} setup={setup} />
    </>
  );
}

export default App;
