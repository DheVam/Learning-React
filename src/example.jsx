// introduction to JSX syntax
// JSX is a syntax extension for JavaScript.
// JSX is a subset of JavaScript that allows you to write HTML-like syntax.
// example 1:

import React from "react";
import Message from "./components/alert";

const element = <h1>Hello, world!</h1>;

const Bikes = {
  brand: "Kawasaki",
  model: "Ninja",
};

/* const message = (msg) => {
  return alert(msg);
}; */

const Conditional = (props) => {
  const condition = props.condition;
  if (condition) {
    return <h1>True</h1>;
  } else {
    return <h1>false</h1>;
  }
};

const Example = () => {
  const persons = ["dheeraj", "lohitha", "john"];
  return (
    <div>
      <h1>{element}</h1>
      <h1>
        Hello, {Bikes.brand} {Bikes.model}!
      </h1>
      {/* passing a function as a prop */}
      <button onClick={() => Message("Hi there!")}>Message Me</button>

      {/* passing a boolean as a prop,and rendering components based on condition */}
      <Conditional condition={false}></Conditional>
    </div>
  );
};

export default Example;
