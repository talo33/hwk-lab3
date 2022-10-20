import * as React from 'react';
// import * as ReactDOM form 'react-dom';

const array = ["First", "Second", "Third"];

const object = {
	first: 1,
	second: 2,
	third: 3,
};

// const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(
	<section>
        <h1>Array</h1>
        <ul>
            {array.map((i) => (
                <li key={i}>(i)</li>
            ))}
        </ul>
	</section>
// );