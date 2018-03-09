import React from 'react';
import ReactDOM from 'react-dom';
import './scss/global.css';
import App from './views/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
