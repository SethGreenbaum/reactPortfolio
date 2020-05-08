import React from "react";
import "./style.css";
import Port1 from "../images/port1.png"
import Port2 from "../images/port2.png"
import Port3 from "../images/port3.png"
import Port4 from "../images/port4.png"
import Port5 from "../images/port5.png"
import Port6 from "../images/port6.png"

function Portfolio() {
  return (
    <div className="card-deck ">
    <div className="col mb-4 border-0 shadow my-5">
      <div className="card">
        <img src={Port1} className="card-img-top" alt="port1"></img>
        <div className="card-body">
          <a href="https://sethgreenbaum.github.io/GUIsProject1/" className="card-link"><h5 className="card-title">Cocktail Mixtape</h5></a>
          <p className="card-text">Generate a themed party with special drinks and music with this spotify-based app</p>
        </div>
      </div>
    </div>
    <div className="col mb-4 border-0 shadow my-5">
      <div className="card">
        <img src={Port5} className="card-img-top" alt="port5"></img>
        <div className="card-body">
          <a href="http://guis-electric-boogaloo.herokuapp.com/" className="card-link"><h5 className="card-title">Quarantinee</h5></a>
          <p className="card-text">Keep the Quarantine blues away with this twitch-based forum</p>
        </div>
      </div>
    </div>
    <div className="col mb-4  border-0 shadow my-5">
      <div className="card">
        <img src={Port2} className="card-img-top" alt="port2"></img>
        <div className="card-body">
          <a href="https://sethgreenbaum.github.io/Homework6/" className="card-link"><h5 className="card-title">Weather App</h5></a>
          <p className="card-text">Simple US weather app, enter a US city and see the forecast and current conditions</p>
        </div>
      </div>
    </div>
    <div className="col mb-4  border-0 shadow my-5">
      <div className="card">
        <img src={Port3} className="card-img-top" alt="port3"></img>
        <div className="card-body">
          <a href="https://sethgreenbaum.github.io/Homework4/" className="card-link"><h5 className="card-title">Coding Quiz</h5></a>
          <p className="card-text">Test your coding knowledge with this short quiz, keep trying until you get a perfect score!</p>
        </div>
      </div>
    </div>
    <div className="col mb-4  border-0 shadow my-5">
      <div className="card">
        <img src={Port6} className="card-img-top" alt="port3"></img>
        <div className="card-body">
          <a href="https://github.com/SethGreenbaum/Homework7" className="card-link"><h5 className="card-title">README Generator</h5></a>
          <p className="card-text">Node-based CLI for generating a README, following a series of prompts</p>
        </div>
      </div>
    </div>
    <div className="col mb-4  border-0 shadow my-5">
      <div className="card">
        <img src={Port4} className="card-img-top" alt="port3"></img>
        <div className="card-body">
          <a href="https://sleepy-sea-55025.herokuapp.com/" className="card-link"><h5 className="card-title">Eat-Da-Burger</h5></a>
          <p className="card-text">Come eat it's burger time! Fun SQL-based food app, see what you can devour!</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Portfolio;
