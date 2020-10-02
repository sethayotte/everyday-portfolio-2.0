import React from "react";
import Main from "./components/MainComponent.js";
import { BrowserRouter } from "react-router-dom";
import "./App.css";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
  );
}

export default App;

