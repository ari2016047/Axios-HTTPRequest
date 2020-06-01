import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
//axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
