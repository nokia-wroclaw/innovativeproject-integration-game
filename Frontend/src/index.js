import React from 'react';
import ReactDOM from 'react-dom';
import './scss/global.css';
import Home from './views/Home/Home';
import Categories from './views/Categories/Categories';
import Navbar from './components/Navbar/Navbar';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path="/categories" component={Categories} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
