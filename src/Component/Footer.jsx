import React from "react";
import '../App.css';
import logo from "../images/logo-removebg-preview.png";
import {Link } from "react-router-dom";

const Footer = () => {
    return (
        <>

            {/* <hr class="my-3" > */}
            <section className=" footer pb-3">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-4 mb-4 text-center text-md-start mleft-logo">
                            <a href=""><img src={logo} alt="logo" className="img img-fluid-logo pt-4" /></a>
                        </div>

                        <div class="col-lg-3 text-center text-lg-end mright-logo">
                            <div className="icons">
                            <a class="btn  btn-floating m-1 text-black fs-5" role="button">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="btn  btn-floating m-1 text-black fs-5" role="button">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="btn  btn-floating m-1 text-black fs-5" role="button">
                                <i class="fab fa-google"></i>
                            </a>
                            <a class="btn  btn-floating m-1 text-black fs-3" role="button">
                                <i class="fab fa-instagram"></i>
                                {/* <img src="{Insta}"/> */}
                            </a> 
                            </div>
                            <br />
                            <div className="links d-flex justify-content-between text-center text-md-end">
                            <Link className="nav-link" to="/terms"><span> Terms of Service</span></Link>
                            <Link className="nav-link" to="/privacy"><span>Privacy Policy</span></Link>
                            <Link className="nav-link" to="/about"><span>About</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="col-12 text-center">
                    <p>Copyrights 2023, EBS,All rights reserved</p>
                </div>
            </section>



        </>

    );
}

export default Footer;
