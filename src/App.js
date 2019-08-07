import React from "react";
import "./App.css";
import Story from "./Story";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">StoryTime!</h1>
      </header>
      <h2>
        <Story />
      </h2>
    </div>
  );
}

export default App;
