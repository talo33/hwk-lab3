import * as React from 'react';


export default function Alert42() {
  const style = {
    margin: "10px 10px",
  }

  function clickHandle() {
    alert("Alert!!!!!!!!!!!!!!!!!!!!")
  }

  return (
    <button value="clickme" style={style} type="primary" onClick={clickHandle}>click here</button>
  );
}
