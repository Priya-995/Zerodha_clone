import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg border-bottom sticky-top justify-content-between align-items-center d-flex" style={{backgroundColor:"white" , height:"4em"}}> 
        <div className="container ">
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg" className="img-fluid" style={{width:"25%"}} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler ms-auto d-sm-flex d-lg-none align-self-center position-absolute end-0 me-5 top-50 translate-middle-y "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5 ">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>
              
            
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
