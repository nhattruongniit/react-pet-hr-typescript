import React from 'react';
import ReactDOM from 'react-dom';

// scss
import './scss/index.scss';

// components
import App from './App';

// service worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
