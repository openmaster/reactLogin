import React, { Component } from 'react';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { Router,  Route} from 'react-router-dom';
import './App.css';
import history from './Components/history'



class App extends Component {
  render() {
    return (
    	<Router history={history}>
    	<div>
    	<Route exact strict path="/" render={({history}) => (<Login/>)} />
    	<Route exact strict path="/dashboard" component={Dashboard}/>
    	</div>
    	</Router>
    );
  }
}

export default App;
