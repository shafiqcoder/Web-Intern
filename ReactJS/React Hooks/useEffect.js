//It is called whenever a page renders/reloads so there must be a condition to call useEffect Hook
import React, { useEffect, useState } from "react";
import axios from "axios";
//npm install axious- API for fake data
function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("url").then((response) => {
      setData(response.data[0].email);
      console.log("API was called");
    });
  }, [count]); //[] this state is compulosry
  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
export default EffectTutorial;
