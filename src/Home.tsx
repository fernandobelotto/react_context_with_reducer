import Counter from "./Counter";

type Props = {};

function Home({}: Props) {
  console.log("rendering Home");
  return (
    <>
      <h1>Home</h1>
      <Counter />
    </>
  );
}

export default Home;
