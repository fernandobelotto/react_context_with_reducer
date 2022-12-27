import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";

function Counter() {
  console.log("rendering Counter");
  return (
    <>
      <CounterValue />
      <CounterButtons />
    </>
  );
}

export default Counter;
