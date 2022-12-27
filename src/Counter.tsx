import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";

type Props = {};

function Counter({}: Props) {
  console.log("rendering Counter");
  return (
    <>
      <CounterValue />
      <CounterButtons />
    </>
  );
}

export default Counter;
