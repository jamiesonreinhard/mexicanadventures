import React from "react";
import Hero from "./Hero";
import Nav from "./Nav";
import Bgimg from "./Bgimg";
import About from "./About";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Hero />
        <About />
        <Bgimg />
      </div>
    </Router>
  );
}

export default App;
