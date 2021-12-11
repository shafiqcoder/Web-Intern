//uselayout is called before the stuff actually printed.
//use effect will call later when everything is loaded
import { useLayoutEffect, useEffect, useRef } from "react";
function LayoutEffectTutorial() {
  const inputRef = useRef(null);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  useEffect(() => {
    inputRef.current.value = "Hello";
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="Classy" />
    </div>
  );
}
export default LayoutEffectTutorial;
