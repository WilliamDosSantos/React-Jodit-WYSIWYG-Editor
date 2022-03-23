import React from "react";
import "./App.css";
import Editor from "./components/Editor/index";

const App = () => {
  return (
    <div className="Container">
      <h1>Editor de Texto</h1>
      <Editor className="Editor" />
    </div>
  );
};

export default App;
