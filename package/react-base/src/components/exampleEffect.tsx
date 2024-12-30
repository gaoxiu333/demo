import { useEffect } from "react";

const ExampleEffect = () => {
  // 数据获取
  useEffect(() => {
    fetch("http://localhost:3000");
  }, []);
  // 时间订阅
  useEffect(() => {
    const handleResize = () => {};
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // 定时器
  useEffect(() => {
    const timer = setInterval(() => {
      // timer code
    }, 1000);
    return () => clearInterval(timer);
  });
  return <></>;
};

export { ExampleEffect };
