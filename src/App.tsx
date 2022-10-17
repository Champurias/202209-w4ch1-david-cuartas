import React from "react";
import Info from "./component/Info";
import "./index.css";

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
        <Info />
      </header>
    </div>
  );
}

export default App;
