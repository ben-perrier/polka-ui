
import React, { useCallback, useEffect, useState } from "react";
import {createRoot} from "react-dom/client";

const App = (props: { message: string }) => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count => count + 1);
  }, [count]);
  return(<>
    <h1>{props.message}</h1>
    <h2>Count: {count}</h2>
    <button onClick={increment}>Increment</button>
  </>)
};
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App message={'hello'}/>);