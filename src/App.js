// import {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Resume from "./Pages/Resume";
import Home from "./Pages/Home"; 
// import Projects from "./Pages/Projects";
// import Skills from "./Pages/Skills";


function App() {
  

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        {/* <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
  
}

export default App;
