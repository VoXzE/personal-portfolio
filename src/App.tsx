import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import PreviousWork from "./components/PreviousWork";

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <PreviousWork />
    </div>
  )
};

export default App;
