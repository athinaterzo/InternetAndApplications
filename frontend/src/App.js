import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Search from './Components/Search';
import Contact from './Components/Contact';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
