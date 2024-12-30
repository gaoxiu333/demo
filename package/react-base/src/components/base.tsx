import { useEffect, useRef, useState } from "react";

// 测试批量更新
export const Base = () => {
  const [count, SetCount] = useState(0);
  const handleClick = () => {
    SetCount(count + 1); // 同步更新出发一次更新，因为它不会和异步更新合并
    setTimeout(() => {
      SetCount(count + 1);
      //   SetCount(count + 2);
      //   SetCount(count + 3); // 批量更新 如果是非函数调用，只会更新后一次调用的值
      SetCount(count + 1);
      SetCount((pre) => {
        if (pre < 3) {
          console.log("pre", pre);
          SetCount(100);
        }
        return pre + 2;
      }); // 3：同步更新 +1 ，异步更新: 触发批量更新，只计算最后一次的值
      // 如果不想要批量更新只计算最后一次的值，请使用 函数式调用
      // SetCount((pre) => pre + 2);
      // SetCount((pre) => pre + 3); // 这样的值会是 6
    });
  };
  const twoRender = () => {
    setTimeout(() => {
      SetCount(1);
      SetCount(2);
    }, 0);
  };
  useEffect(() => {
    console.log("count Effect", count);
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>state count:{count}</button>
      <button onClick={twoRender}>twoRender</button>
    </div>
  );
};

// 还是要熟记生命周期啊，不然下面的代码都看不懂
function PreviousCounter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    // 更新前保存上一次的 count 值
    console.log("effect count", count);
    prevCountRef.current = count;
  });
  console.log("outer count", count, prevCountRef.current);
  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>当前计数：{count}</p>
      <p>上一次计数：{prevCount ?? "N/A"}</p>
      <button onClick={() => setCount(count + 1)}>增加计数</button>
    </div>
  );
}

export { PreviousCounter };
