import Home from "./Home";
import { CounterProvider } from "./CounterProvider";

export default function App() {
  console.log("rendering App");
  return (
    <CounterProvider>
      <Home />
    </CounterProvider>
  );
}
