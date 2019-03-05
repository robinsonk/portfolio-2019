import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import About from '../About/About'
import Sliders from '../Sliders/Sliders'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <main>
          <About 
            id="about"
          />
          <Sliders 
            id="skills"
          />
          <Projects 
            id="projects"
          />
          <Contact 
            id="contact"
          />
        </main>
      </div>
    );
  }
}

export default App;
