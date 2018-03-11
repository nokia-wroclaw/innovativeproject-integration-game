import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Categories from './views/Categories/Categories';
import AddCategory from './views/AddCategory/AddCategory';
import EditCategory from './views/EditCategory/EditCategory';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './scss/global.css';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path="/categories/edit" component={EditCategory} />
                <Route path="/categories/add" component={AddCategory} />
                <Route path="/categories/display" component={Categories} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
