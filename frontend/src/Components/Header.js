import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";



class Header extends Component {

  render() {



    return (
      <header id="home" >
      <ParticlesBg type="cobweb" color="#11ABB0"  bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
	         <li><a className="smoothscroll" href="#search">Search</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">Clinical trials</h1>
            <h3>In this website you can find all the clinical trials for a specific condition and drug. 
               You can also read the brief summary and the elegibillity criteria for each trial</h3>
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#search"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
