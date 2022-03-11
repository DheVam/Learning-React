// basic introduction to React
// react is a library for building user interfaces
// react maintains a tree of components
// each component has a state
// each component has a lifecycle
// react does not use DOM
// react uses virtual DOM
// virtual DOM is a representation of the UI

import Example from "./example";
import React from "react";
import "./index.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// BrowserRouter is parent component which has stores all the other elements.
// Everything within this BrowserRouter will be a part of routing

// Routes is the parent component which holds all the components that needs to be routed

// Route element hold the user-defined path and the element that needs to be routes

// Link element is nothing but our <a></a> tag which hold the source link of the element to be routed when clicked
