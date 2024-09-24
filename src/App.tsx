import useInterval from "./hooks/useInterval";

function App() {
  useInterval(() => {
    console.log("hello");
  }, 1000);
  return <div></div>;
}

export default App;
