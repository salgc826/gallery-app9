import React, { Component } from 'react';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Pandas from './components/Pandas';
import Dogs from './components/Dogs';
import Lamborghini from './components/Lamborghini';
import RyanCarson from './components/RyanCarson';
import {
    BrowserRouter,
    Route,
    Switch
 } from 'react-router-dom';
 import NotFound from './components/NotFound';
 import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">



          <Header />

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/search' component={SearchForm} />
            <Route path='/pandas' component={Pandas}/>
            <Route path='/dogs' component={Dogs}/>
            <Route path='/lamborghini' component={Lamborghini}/>
            <Route path='/RyanCarson' component={RyanCarson}/>
            <Route path='/search/:topic' component ={SearchResults} />
            <Route component={NotFound}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
