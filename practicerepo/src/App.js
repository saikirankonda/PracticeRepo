import logo from "./logo.svg";
import "./App.css";
import TreeFormat from "./Components/TreeFormat";
import explorer from "./JsonData";
import Circle from "./Components/Circle";

function App() {
  return (
    <div className="App">
      {/* <TreeFormat explorer={explorer} /> */}

      <Circle />
    </div>
  );
}

export default App;
