import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Movies from './components/Movies'
import {Route, Switch, NavLink} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
    
        <ul className='navbar'>
        <NavLink to='/' className='linkkkk'><li>Home</li></NavLink>  
        <NavLink to='/movies' className='linkkkk'><li>Movies</li></NavLink>  
        </ul>
        

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' component={Movies} />
        </Switch>
        
     
      </div>
    );
  }
}

export default App;
