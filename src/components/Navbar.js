import React from "react";
import "./home.css";
import "./navbar.css";
import imgsrc from "./patel.jpg"
function Navbar() {
  return (
    <>
      {/* <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top  ">
     
    <a class="navbar-brand" href="#home">
      <img src={imgsrc} alt="Bootstrap" className="rounded-circle me-1" width="25" height="25"/>
    </a>

        <div className="container-fluid">
          <div
            className="collapse navbar-collapse  my-6"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <a className="nav-link para "  href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link para" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link para" href="#contect">
                  Contect me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
