import React from 'react';
import './App.css';
import Form from './components/form';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import bootstrapCarousel from './components/BootstrapCarousel';

function App() {
  return (
    <div>
   <BrowserRouter>
    <div>
      <Navbar></Navbar>
        <Switch>
         <Route path="/" component={home} exact/>
         <Route path="/Form" component={Form}/>
         <Route path="/about" component={about}/>
        <Route component={Error}/>
       </Switch>
    </div> 
  </BrowserRouter>
  <bootstrapCarousel></bootstrapCarousel>
  </div>
  );
}

export default App;
