import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './state.js';
import reportWebVitals from './reportWebVitals';
import { observer, validator } from './state.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderTree = () => {  
  root.render(
    <React.StrictMode>
      <App validator={validator} state={state}/>
    </React.StrictMode>
  );  
}

renderTree();
observer(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
