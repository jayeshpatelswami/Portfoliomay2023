import React from "react";
import "./home.css";
import "./navbar.css";
// import imgsrc from "./patel.jpg";
function Navbar() {
  return (
    <>
      {/* <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}> */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top  ">
        <a className="navbar-brand" href="#home">
          <img
            src={imgsrc}
            alt="Bootstrap"
            className="rounded-circle me-1"
            width="25"
            height="25"
          />
        </a>

        <div className="container-fluid">
          <div
            className="collapse navbar-collapse  my-6"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link para " href="#home">
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
      </nav> */}
    
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#home">  <img
            src={imgsrc}
            alt="Bootstrap"
            className="rounded-circle me-1"
            width="25"
            height="25"
          /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link "  href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contect">Contect me</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}

{/* <!-- Navbar --> */}
  <nav className="navbar navbar-expand-lg navbar-dark sticky-top mask-custom shadow-0">
    <div className="container">
      <a className="navbar-brand para capi" href="#home"> Patel's Portfolio</a>
 

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link para capi" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link para capi" href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link para capi" href="#contect">Contect Me</a>
          </li>
        </ul>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#!">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* <!-- Navbar --> */}
    </>
  );
}

export default Navbar;
