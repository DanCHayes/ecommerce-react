import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from './views/homepage/homepage';
import ShopPage from './views/shop/shop';

import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
