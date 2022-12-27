import { useContext } from "react";
import { CounterContextDispatch } from "./CounterProvider";

type Props = {};

function CounterButtons({}: Props) {
  console.log("rendering CounterButtons");

  const dispatch = useContext(CounterContextDispatch);

  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </>
  );
}

export default CounterButtons;
