import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function Nicetomeetreact() {
  const [name, setName] = React.useState("Loc");
  const [age, setAge] = React.useState(21);


  return (
    <>
      <section>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p> My name is {name}</p>
      </section>
      <section>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p> My age is {age}</p>
      </section>
    </>
  );
}
