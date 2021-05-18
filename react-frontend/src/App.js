import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListProductsComponent from './components/ListProductsComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateProductsComponent from './components/CreateProductsComponent';
import UpdateProductsComponent from './components/UpdateProductsComponent';
import ViewProductsComponent from './components/ViewProductsComponent';
import Home from './components/Home';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />            
              <Route path = "/" exact component = {Home}></Route>
                <div className="container">
                    <Switch> 
              
                          <Route path = "/products" component = {ListProductsComponent}></Route>
                          <Route path = "/add-products" component = {CreateProductsComponent}></Route>
                          <Route path = "/view-products/:id" component = {ViewProductsComponent}></Route>
                      <Route path = "/update-products/:id" component = {UpdateProductsComponent}></Route> 
                    </Switch>
                </div>
         
        </Router>
    </div>
    
  );
}

export default App;
