import React from "react";
import '../../App.css';
import logo from "../../Component/Assest/Brands/logo-removebg-preview.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>

            <section className="footer pb-3">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-4 mb-4 text-center text-md-start">
                            <a href="https://www.quickblood.org"><img src={logo} alt="logo" className="img img-fluid-logo pt-4 mleft-logo" /></a>
                        </div>

                        <div class="col-lg-3 text-center text-lg-end mright-logo">
                            <div className="icons">
                                <a class="btn  btn-floating m-2 text-black fs-3" role="button" href="https://www.linkedin.com/company/quickblood/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                                <a class="btn  btn-floating m-2 text-black fs-3" role="button" href="https://www.instagram.com/quickblood_?igsh=aTB6c3JoNHhxbXox" target="_blank" rel="noopener noreferrer" >
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a class="btn  btn-floating m-2 text-black fs-3" role="button" href="https://twitter.com/Quick_Blood" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-x-twitter"></i>
                                </a>
                                <a class="btn  btn-floating m-2 text-black fs-4" role="button" href="#" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="btn  btn-floating m-2 text-black fs-3" role="button" href="#" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-whatsapp"></i>
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
                <div class="col-12 text-center px-3">
                    <p>Copyright@{new Date().getFullYear()},SYNTIARO,All rights reserved</p>
                </div>
            </section>


        </>

    );
}

export default Footer;
