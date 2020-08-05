import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Welcome from './Welcome';
//import Greet from './Greetings';
//import Sample from './SampleHook'
import Home from "./components/Home";
import {BrowserRouter,Route} from 'react-router-dom';
import Resume from './components/Resume'

function App() {
  return (
    <div >
        <Route exact path='/' component={Home} />
        <Route exact path='/resume' component={Resume} />  
    </div>
  );
}



export default App;