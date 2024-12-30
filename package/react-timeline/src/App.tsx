import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

function useCustomHook() {
  console.log("Custom Hook: Initial render or re-render");

  useEffect(() => {
    console.log("Custom Hook: useEffect - Mounted or Updated");
    return () => {
      console.log("Custom Hook: useEffect Cleanup - Before Unmount or Update");
    };
  });

  return "Hello from Custom Hook";
}

function ChildComponent({ count }: { count: number }) {
  const customMessage = useCustomHook();
  console.log("ChildComponent: Render");
  useEffect(() => {
    console.log("ChildComponent: useEffect - Mounted or Updated");
    return () => {
      console.log("ChildComponent: useEffect Cleanup - Before Unmount");
    };
  }, [count]);

  useLayoutEffect(() => {
    console.log("ChildComponent: useLayoutEffect - Before Paint");
    return () => {
      console.log("ChildComponent: useLayoutEffect Cleanup");
    };
  }, [count]);

  return (
    <div>
      <p>{customMessage}</p>
      <p>Child Count: {count}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const ref = useRef(null);

  console.log("App: Render");

  const memoizedValue = useMemo(() => {
    console.log("App: useMemo - Computing Memoized Value");
    return `Memoized Value: ${count}`;
  }, [count]);

  const memoizedCallback = useCallback(() => {
    console.log("App: useCallback - Computing Memoized Callback");
    return `Memoized Callback: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("App: useEffect - Component Mounted");
    return () => {
      console.log("App: useEffect Cleanup - Before Component Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("App dependency changed: useEffect - Component Updated");
    return () => {
      console.log(
        "App dependency changed: useEffect Cleanup - Before Component Updated"
      );
    };
  }, [inputValue]);

  useLayoutEffect(() => {
    console.log("refresh", ref.current);
    console.log("App: useLayoutEffect - Before Paint");
    return () => {
      console.log("App: useLayoutEffect Cleanup");
    };
  });

  return (
    <div ref={ref}>
      {(() => {
        console.log("App: DOM Render");
        return null;
      })()}
      <p>{memoizedValue}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={memoizedCallback}>Increment</button>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          console.log("App: Input onChange");
          setInputValue(e.target.value);
          // memoizedCallback();
        }}
      />
      <ChildComponent count={count} />
    </div>
  );
}

export default App;
