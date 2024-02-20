import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import errorImage from "../../Component/Assest/images/error.png";

const Gallery = () => {
  return (
    <>

      <div className="container text-center">
        <img src={errorImage} alt="404-error" className="error-image img-fluid" />
      </div>
      <div>
        <h2 className="error-message">Product &amp; Page Under Development</h2>
        <p className="error-paragraph">
          You can search for the page you want here or return to the HOMEPAGE
        </p>
      </div>

      <div className='btnhome text-center'>
        <Link to="/" className="error-link">
          Go to  Homepage
        </Link>.
      </div>
    </>
  );
};

export default Gallery;

