import React from "react";
import { NavLink, Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import logo from "../../Component/Assest/Brands/logo-removebg-preview.png";
import '../../App.css';

const Navbar = () => {
  return (
    <>
      <section className="navbar-home">
        <div className="container-fluid">
          <div className="row">
            <nav className="navbar navbar-expand-lg fixed-top">
              <div className="container-fluid">
                <div className="logo-site mleft-logo ">
                  <a href="https://www.quickblood.org/"><img src={logo} alt="logo" className="img-fluid-logo" /> </a>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav menu-navbar-nav">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active-h"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/gallery">
                        Gallery
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/donor">
                        Donor
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/hospital">
                        Receiver
                      </NavLink>
                    </li>
                    <li className="nav-item mright-logo">

                      <Link className="nav-link overflow-hidden " to="/login">
                        Login
                      </Link>

                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className=""
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <Icon.PersonCircle
                          color="royalgrey"
                          size={26}
                          className="mt-4"
                        />
                      </Link>
                      <ul
                        className="dropdown-menu drop-center dropdown-menu-end"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <NavLink className="dropdown-item" to="/">
                            <Icon.House
                              color="royalgrey"
                              size={40}
                              className="px-2"
                            />
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/donornear">
                            <Icon.Map
                              color="royalgrey"
                              size={40}
                              className="px-2"
                            />
                            Donor Near You
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/profile">
                            <Icon.PersonCircle
                              color="royalgrey"
                              size={40}
                              className="px-2"
                            />
                            My Profile
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/request">
                            <Icon.Envelope
                              color="royalgrey"
                              size={40}
                              className="px-2"
                            />
                            Request
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/donorhistory">
                            <Icon.ClockHistory
                              color="royalgrey"
                              size={40}
                              className="px-2"
                            />
                            Donor History
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/language">
                            <Icon.Translate
                              color="royalgrey"
                              size={40}
                              className="px-2"
                            />
                            Language
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="/help">
                            <Icon.QuestionCircle
                              color="royalgrey"
                              size={40}
                              className="px-2"
                            />
                            Help
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
