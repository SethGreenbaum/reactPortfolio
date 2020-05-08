import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from './logo.svg';

function NavTabs() {

  const location = useLocation();


  return (
    <nav
      className="navbar navbar-custom navbar-expand-sm sticky-top"
      id="nav"
    >
      <a className="navbar-brand navbar-custom" href="/">
        <Logo 
        width = {50}
        height = {50}
        />
  </a>
  <h1 className="text-primary" >
                        Seth Greenbaum
                      </h1>
      <div className="ml-auto">                
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default NavTabs;
