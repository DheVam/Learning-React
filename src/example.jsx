// introduction to JSX syntax
// JSX is a syntax extension for JavaScript.
// JSX is a subset of JavaScript that allows you to write HTML-like syntax.
// example 1:

import React from 'react';

const element = <h1>Hello, world!</h1>;

const Bikes = {
  brand: "Kawasaki",
  model: "Ninja",
};

const Example = () => {
  return (
    <div>
        <h1>{element}</h1>
      <h1>
        Hello, {Bikes.brand} {Bikes.model}!
      </h1>
    </div>
  );
};

export default Example;
