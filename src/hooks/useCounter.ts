import { useState } from "react";

export function useCounter(max?: number, loop?: boolean) {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => {
      if (max && prev + 1 < max) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  const decrement = () => {
    setCount((prev) => {
      if (prev - 1 === 0) {
        return 0;
      } else {
        return prev - 1;
      }
    });
  };

  const set = (count: number) => {
    if (max && count <= max) {
      setCount(count);
    } else {
      setCount(0);
    }
  };

  return { increment, decrement, set, count };
}
