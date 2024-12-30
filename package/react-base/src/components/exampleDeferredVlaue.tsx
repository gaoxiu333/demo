import { useDeferredValue, useState } from "react";

const ExampleDeferredValue = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  return <></>;
};

export { ExampleDeferredValue };
