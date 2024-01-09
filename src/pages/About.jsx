import React from 'react';
import '../App.css';
import Banner from '../images/banner-res.jpeg';
import Chart from '../images/chart-donation.png'
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <body className='overflow-hidden'>
      <section className='banner overflow-hidden  mb-5'  >
        <div className="container-fluid">
          <div className="row">
            <div className='col-md-12  text-md-start banner-text'>
              <h4 className='fs-1 banner-head'>Donate Blood Save life</h4>
              <p className='  banner-p text-lg-start text-md-start fs-md-4 d-md-inline'> Your Blood can bring smile in other Personal Face</p>
            </div>
          </div>
        </div>
      </section>

      <section className='banner-2 overflow-hidden my-5 '>
        <div className="container">
          <div className="row d-flex justify-content-center align-item-center ">
            <div className='col-lg-5 col-md-6 px-5  mb-3 mtb'>
              <img src={Banner} alt="banner" className='img-fluid img-banner-2 mx-auto px-3' />
            </div>
            <div className='col-lg-7 col-md-6  align-center color-banner-2 px-5 py-4'>
              <p className=''>Welcome to our E-Blood System, a revolutionary platform connecting donors and receivers in the noble cause of saving lives. With an intuitive interface, our system seamlessly brings together those in need of blood and compassionate donors, fostering a community dedicated to making a positive impact. Join us in this lifesaving journey, where every donation becomes a lifeline, and together, we make a difference." our Emergency Blood System – a vital lifeline in critical situations. Swift, reliable, and designed to respond to urgent blood needs. This system ensures immediate access to blood donors during emergencies, connecting those in dire situations with willing contributors. With streamlined processes, our platform stands as a beacon of hope, providing crucial support when time is of the essence. Be part of our mission to save lives in times of urgent need. "The e-blood system facilitates efficient communication between blood donors and recipients. It streamlines the process of connecting donors with those in need by utilizing an electronic platform. Through this system, users can easily register as donors or recipients, providing essential information. The platform then matches compatible donors with recipients, enhancing the speed and accessibility of blood donation services.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="exist py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className='about-head  pb-4'>Why do we Exist ?</h3>
              <p>The EBS (e-Blood System) is a web application designed to facilitate blood donation. It helps recipients find the nearest donors efficiently. Users can provide details about their blood type, location, and other relevant information, making it easier for those in need to connect with potential donors. The system aims to streamline the process of matching donors with recipients, ensuring a quicker and more effective response in times of need. The project comprises a central repository that serves as a comprehensive database housing details of various blood donors.</p>
            </div>
          </div>
        </div>
      </section>


      <section class="py-5 card-div">
        <div class="container px-4 px-lg-5 my-5">
          <h4 class="about-head mb-5 pb-4 text-center">Benefits</h4>
          <div class="row gx-4 gx-lg-5 ">
            <div class=" mb-5 col-xl-4 col-md-6 d-flex align-items-center">
              <div class="card h-100 px-4 text-center  bg-1">
                <h4 className="pt-4 pb-2">Efficient Blood Donor Matching</h4>
                <p>Facilitates quick and efficient matching of blood donors with recipients in need.</p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex align-items-center mb-5">
              <div class="card h-100 px-4 text-center bg-2 ">
                <h4 className="pt-4 pb-2">Location-Based Search</h4>
                <p>Allows users to find the nearest blood donors based on their location.</p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex align-items-center mb-5">
              <div class="card h-100 px-4 text-center bg-1">
                <h4 className="pt-4 pb-2"> Emergency Response</h4>
                <p>Contributes to faster response times during critical situations, potentially saving lives.</p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex align-items-center mb-5">
              <div class="card h-100 px-4 text-center bg-2">
                <h4 className="pt-4 pb-2">Transportation Assistance</h4>
                <p>Integrates with OLA for providing transportation assistance to donors, ensuring their timely arrival at the donation location</p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex align-items-center mb-5">
              <div class="card h-100 px-4 text-center bg-2">
                <h4 className="pt-4 pb-2">Availability Checking</h4>
                <p>Enables users to check the availability of specific blood groups nearby, especially in emergency situations.</p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex align-items-center mb-5">
              <div class="card h-100 px-4 text-center bg-2">
                <h4 className="pt-4 pb-2">Emergency Blood Group Posting</h4>
                <p>Allows quick posting of blood group information during emergencies, expediting the identification of available donors. Provides a user-friendly registration system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="exist py-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className='about-head'>Blood Group Donation Chart</h3>
              </div>
          </div>
        </div>
      </section>

<section className="chart overflow-hidden">
  <div className="container">
    <div className="row">
      <div className="col-12 my-5">
        <img src={Chart} alt="Donation-Chart" className='img-fluid'/>
      </div>
    </div>
  </div>
</section>

<Footer/>

</body>





    </>
  );
}

export default About;
