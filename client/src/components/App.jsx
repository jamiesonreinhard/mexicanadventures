import React from 'react';
import Hero from "./Hero";
import Nav from "./Nav";
import Bgimg from "./Bgimg";
import About from "./About";
import CodingBlog from "./CodingBlog";
import LifestyleBlog from "./LifestyleBlog";



function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <CodingBlog />
      <LifestyleBlog />
      <Bgimg />
      
    </div>
  );
}

export default App;
