import { useState } from "react";

export const useCounter = (action) => {
  const [count, setCount] = useState(1);
  if (action === "plus") {
    setCount(count + 1);
  } else if (action == "minus") {
    setCount(count - 1);
  }
  return count;
};
