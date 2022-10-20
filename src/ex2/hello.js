import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function Helloreact() {
  const [name] = React.useState("Loc");
  const [age] = React.useState(21);

  return (
    <>
      <p>My name is {name} </p>
      <p>My age is {age} </p>
    </>
  );
}
