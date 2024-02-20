import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from '../../pages/Home';
import About from '../../pages/About';
import Gallery from '../../pages/Gallery';
import Donor from '../../pages/Donor';
import Receiver from '../../pages/Receiver/Receiver/Receiver';
import Profile from '../../pages/Profile/Profile';
import DonorNear from '../../pages/Profile/DonorNear';
import DonorHistory from '../../pages/Profile/DonorHistory';
import Language from '../../pages/Profile/Language';
import Request from '../../pages/Profile/Request';
import Help from '../../pages/Profile/Help';
import Login from '../../pages/Login';
import '../../../App.css';
import  Hospital  from '../../pages/Receiver/Hospital/Hospital';
import Patient from '../../pages/Receiver/Patient/Patient';

const Main = () => {
  return (
    <>
      {
        <Routes>
          {/* <Route exact path="/navbar" element={<Navbar />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/donor" element={<Donor />} />
          <Route exact path="/receiver" element={<Receiver />} />
          <Route exact path="/hospital" element={<Hospital />} />
          <Route exact path="/patient" element={<Patient />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/donornear" element={<DonorNear />} />
          <Route exact path="/request" element={<Request />} />
          <Route exact path="/donorhistory" element={<DonorHistory />} />
          <Route exact path="/language" element={<Language />} />
          <Route exact path="/help" element={<Help />} />
        </Routes>
      }
    </>
  )
}

export default Main
