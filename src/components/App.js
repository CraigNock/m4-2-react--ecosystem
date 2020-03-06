import React from 'react';
import Header from './Header';
import HomePage from './Home';
import AboutPage from './About';
import ItemDetails from './ItemDetails';


import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App(props) {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/items/:itemId'>
          <ItemDetails />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}







export default App;
