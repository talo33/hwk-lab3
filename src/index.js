import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComponents from './Mycomponents/compo1.js';
import MyComponents1 from './Mycomponents/compo2';

import MyInput from './component3/MyInput';

import MyButton from './Mycomponents/compo3button';
import MyList from './Mycomponents/compo3list';

import MyButton13 from './Mycomponents/button1.3';

import Element from './ex4/ex41';
import Element41 from './ex4/ex41';
import Alert42 from './ex4/ex42';

const root = ReactDOM.createRoot(document.getElementById('root'));


// ex1.2
// const appState = {
//   text: "Mybutton",
//   disabled: true,
//   items: ["First", "Second", "Third"],
// };

// function render(props) {
//   root.render(
//     <main>
//       <MyButton text={props.text} disabled={props.disabled}/>
//       <MyList items={props.items}/>
//     </main>
//   );
// }
root.render(
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
    <Alert42></Alert42>
);

// setTimeout(() => {
//   appState.disabled = false;
//   appState.items.push("Fourth");

//   render(appState);
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//ex1.3


// function render({ second }) {
//   root.render(
//     <main>
//       <MyButton />
//       <MyButton text={second.text} disabled={second.disabled} />
//     </main>
//   )
// }

// render({
//   second: {
//     text: "Second Button",
//     disabled: true,
//   },
// });


reportWebVitals();
