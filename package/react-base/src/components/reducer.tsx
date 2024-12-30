import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unhandled action type:" + action.type);
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <p>当前计数：{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>增加</button>
      <button onClick={() => dispatch({ type: "decrement" })}>减少</button>
      <button onClick={() => dispatch({ type: "reset" })}>重置</button>
    </>
  );
};

export { Counter };
