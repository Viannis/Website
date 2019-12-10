import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Home from './landing';
import Do from './do.js';
import New from './new.js';
import About from './about.js';
import { BrowserRouter as Router, Route} from 'react-router-dom'

const particleOpt = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
          nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 5,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode:  "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes:{
        grab: {
            distance: 400,
            line_linked: {
                opacity: 1
            }
        },
        bubble:{
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3
        },
        repulse:{
            distance: 400,
            duration: 0.4
        },
        push:{
            particles_nb: 4
        },
        remove:{
            particles_nb: 2
        }
    }
  },
  retina_detect: true
}

function App() {
  return (
      <div className="App">
        <div className="container topBotomBordersOut">
          <a id="homeLink">HOME</a>
          <a id="newLink">WHAT'S NEW</a>
          <a id="doLink">WHAT WE DO</a>
          <a id="aboutLink">ABOUT US</a>
          <a id="contactLink">CONTACT US</a>
        </div>
        <Router>
          <Route exact path="/about" component={About}></Route>
        </Router>
      <Particles className="particles" params={particleOpt}>
        
      </Particles>
      
        
    </div>
  );
}

export default App;
