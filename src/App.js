import React from 'react';
import "./App.css"
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/inc/Footer';
import Training from './components/pages/Training';
import Modules from './components/pages/Modules';
import Work from './components/pages/Work';
import School from './components/pages/School';

function App() {
  return (
    <Router>

      <div >
        <Navbar />
        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

         

          <Route path="/training">
            <Training />
          </Route>
          <Route path="/modules">
            <Modules/>
          </Route> 
          <Route path="/school">
            <School />
          </Route>
          <Route path="/work">
            <Work/>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
