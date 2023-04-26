import { BrowserRouter, Route, Switch } from "react-router-dom";
import Resume from "./Pages/Resume";
import Home from "./Pages/Home"; 
import Projects from "./components/Projects";
import Contact from "./components/Contact";
//import Skills from "./Pages/Skills";


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
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {/* <Route path="/skills">
          <Skills />
       </Route> */}
      </Switch>
    </BrowserRouter>
  );
  
}

export default App;