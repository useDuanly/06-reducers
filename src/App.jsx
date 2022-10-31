import "./App.css";
import Contador from "./components/Contador";
import { memo } from "react";

function App() {
  console.log("home");
  return (
    <section className="App">
      <h1>useReduce</h1>
      <hr />
      <Contador />
    </section>
  );
}

export default memo(App);
