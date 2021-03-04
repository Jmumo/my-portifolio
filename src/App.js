import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';

import Project from './components/Project';
import Undefined from './components/Undefined';



function App() {

  return (
    <BrowserRouter>

    <NavBar/>
         <Switch>
          <Route component = {Home} path ='/' exact />
            <Route component = {About} path ='/about'/> 
            <Route component = {Project} path ='/projects'/>
             <Route component = {Undefined} path ='/undefined' />
          

        </Switch>
    </BrowserRouter>

  )
    
  
}

export default App;
