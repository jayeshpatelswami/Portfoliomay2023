import React from 'react'
import "./navbar.css"
function Navbar(props) {

    return (
        <>

            {/* <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
                <div className="container-fluid">
                 
                    <div className="collapse navbar-collapse  my-6" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contect">Contect me </a>
                            </li>
                            
                           
                        </ul>

                        <div class="nav-item form-check form-switch form-check-input-active-filter">
        <input class="form-check-input" type="checkbox" onChange={props.toggal} role="switch" id="flexSwitchCheckDefault"/>
      </div>
                        
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
