
import logo from './Zak.JPG';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,} from "react-router-dom";
import navbar from './compentents/navbar';
import About from './Components/about';



function App() {
  return (
    <Router>
    <div className="App">
      <navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
        



    </div>
    </Router>
  );
}

export default App;

