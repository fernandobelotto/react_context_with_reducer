import { useContext } from "react";
import { CounterContextState } from "./CounterProvider";

type Props = {};

function CounterValue({}: Props) {
  console.log("rendering CounterValue");

  const { counter } = useContext(CounterContextState);
  return <h4>{counter}</h4>;
}

export default CounterValue;
