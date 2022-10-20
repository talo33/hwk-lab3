import logo from './logo.svg';
import './App.css';
import * as React from 'react';
// import * as ReactDOM form 'react-dom';

import MyButton from './components/MyButton.js';
import MySection from './components/MySection.js';

import ex04 from './componentex04/ex04.js';

import MyComponents from './Mycomponents/compo1.js';
import Helloreact from './ex2/hello';
import Nicetomeetreact from './ex2/nicetomeet';
import getgoreact from './ex2/getgoreact';

import Element from './ex4/ex41';

function App() {
  return (
    <div className="App">
      <div>
          {/* ex-0 */}
          {/* <div>
          const root =
          ReactDom.createRoot(document.getElementById("root"));

          root.render(
          <p>
            Hello, <strong>JSX</strong>
          </p>
          
          </div> */}
          {/* ex-0.1 */}
          <div>
            {/* const root = ReactDOM.creatRoot(document.getElementById('root'))

          root.render( */}
            {/* <div>
            <button />
            <code />
            <input />
            <label />
            <p />
            <pre />
            <select />
            <table />
            <ul />
          </div> */}
            {/* ) */}
            {/* ex-0.2 */}
            {/* <div>
            const root =
            ReactDOM.createRoot(document.getElementById('root'));

            root.render( 
            <section>
              <header>
                <h1>A Header</h1>
              </header>
              <nav>
                <a href="item">Nav Item</a>
              </nav>
              <main>
                <p> The main content...</p>
              </main>
              <footer>
                <small>&copy; 2021</small>
              </footer>
            </section>
            ); 
          </div> */}
            {/* <div>
            <MySection>
              <MyButton>My Button Text</MyButton>
            </MySection>
          </div> */}
            {/* <div>
            <Helloreact></Helloreact>
          </div> */}
            {/* <div>
            <Nicetomeetreact></Nicetomeetreact>
          </div> */}

        </div>
      </div>
      {/* <div>
        <Element></Element>
      </div> */}
    </div>
  );
}

export default App;
