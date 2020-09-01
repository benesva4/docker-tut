import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState] = React.useState("");

  const checkBe = async () => {
    const response = await fetch("/counter");
    if (response?.ok) {
      console.log(response);
      setState(await response.text());
      return;
    }
    setState("error");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={checkBe}>Counter</button>
        {state}
      </header>
    </div>
  );
}

export default App;
