import { decrement, increment } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Button } from "react-bootstrap";

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div style={{ filter: "blur(0.4px)" }} className="p-4 d-flex gap-4">
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <span className="text-secondary fs-2">{count}</span>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
    </div>
  );
}

export default Counter;
