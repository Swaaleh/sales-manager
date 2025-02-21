import { useState } from "react";
function Counter () {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Sales: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add Sale</button>
    </div>
  );
}

export default Counter;