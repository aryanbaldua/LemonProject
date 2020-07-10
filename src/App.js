import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Nav2 from './components/nav';
function App() {
  return (
    <div>
   <BrowserRouter>
    <div>
      <Navigation />
        <Switch>
         <Route path="/" component={Navbar} exact/>
         <Route path="/Form" component={Form}/>
        <Route component={Error}/>
       </Switch>
    </div> 
  </BrowserRouter>
  <Nav2></Nav2></div>
  );
}

export default App;
