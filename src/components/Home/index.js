import React from "react";
import "./style.css";
import Profile from "../images/bio.png"

function Home() {
  return (
    <div className="container ">
    <div className="row">
      <div className="col-xs-3"></div>
      <div className="col-xs-6">
    
      <div className="card border-dark mb-3 shadow my-5">
          <img src={Profile} className="card-img-top w-100 p-5 bg-green"  alt="Profile"></img>
          <div className="card-body p-5 bg-green">
            <h5 className="card-title p-1">About Me</h5>
            <p className="card-text p-1">Hello Friend! My name is Seth Greenbaum, I'm an process engineer from Denver, Colorado  with a background in molecular biology and plant biology,
              who's stepping his toes into the world of web development and programming.
            </p>
            <p className="card-text p-1">These days, we live so much of our lives online. What many people don't realize is how the 
              technology has become and integral component of everyday things beyond just tv's, computers and phones. Technology influences 
              the way all the material parts of our lives are produced, everything from the way our clothes are made to the way our food is grown. 
              Given the limitless possibilities of today's tech, the potential to solve real world problems such as integrating local organic supply chains,
              monitering industrial processes to solve issues in real-time, or providing global access to food distribution resources. 
              There are endless possibilites for the ways that this technology can improve and transform our lives and protect the world.
            </p>
            <p className="card-text p-1">I hope you enjoy my profile site!</p>
            <p className="card-text p-1"><small className="text-muted">~Seth</small></p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-3"></div>
  </div>
  );
}

export default Home;
