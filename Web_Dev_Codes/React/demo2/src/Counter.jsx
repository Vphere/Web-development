import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.counter}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

const styles = {
  counter: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
};