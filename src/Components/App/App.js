import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import About from '../About/About'
import Sliders from '../Sliders/Sliders'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
            <About />
            <Sliders />
            <Projects />
            <Contact />
        </main>
      </div>
    );
  }
}

export default App;
