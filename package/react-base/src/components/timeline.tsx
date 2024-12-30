import { useEffect, useLayoutEffect, useMemo, useState } from "react";

const Timeline = () => {
  console.log("render");
  const [inputValue, setInputValue] = useState(() => {
    console.log("init state");
    return "123";
  });
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    return () => {
      console.log("unmount");
    };
  }, [inputValue]);
  console.log("inputValue", inputValue);

  const heavy = useMemo(() => {
    console.log("useMemo");
    return "123 memo";
  }, [inputValue]);
  useEffect(() => {
    console.log("useEffect");
    return () => console.log("unmount useEffect");
  }, [inputValue]);
  return (
    <>
      timeline:{heavy}
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

export { Timeline };
