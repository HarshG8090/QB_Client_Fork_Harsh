import React from 'react';
import '../App.css';
import donate from '../images/why-donate.png'
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Home = () => {
  return (
    <>
    <Navbar/>
      <section id="hero" className='d-flex align-items-center justify-content-center img-fluid overflow-hidden'>
       <div className='container'>
      <div className='row mt-5'> 
        <div className='col-md-12  text-md-start'>
          <h4 className='home-h4 '>Donate Blood and get Real Blessings</h4>
          <p className='home-text text-lg-start text-md-start '>Blessed are those who selflessly give the gift of life through blood donation. In every drop, there lies the potential to save a life and bring hope to those in need. </p>
        </div>
         </div> 
        </div>
      </section>


      <section className='container mt-5 mb-2 why'>
        <div className='row'>
        <div className='col-lg-9 col-md-12 order-md-1 order-2 align-center p-4'>
            <p className='fs-1 text-muted fw-bold text-center'>Why to Donate Blood</p>
            <p className='lh-base text-muted'>Donating blood is crucial because it saves lives. When you donate blood, you provide a lifeline to individuals facing medical emergencies, surgeries, trauma, and various medical conditions. Blood donations are essential for:<strong>Emergency Situations, Medical Treatments, Chronic Illnesses, Pregnancy and Childbirth, Diseases and Disorders.</strong>  By donating blood, you contribute to the community's health and well-being, playing a direct role in saving lives and improving the quality of life for those in need.</p>
          </div>
        <div className='col-lg-3 col-md-12 order-md-2 order-1 mt-3 mt-md-0 text-center'>
            <img src={donate} alt="why-donate" height={250} className='rounded-circle img-why pt-2' />
          </div>
        </div>
      </section>

      <section class="py-5 card-div">
        <div class="container-fluid px-4 px-lg-5 mt-5">
          <h4 class="heading fw-semibold my-5 text-center">Who can Donate Blood?</h4>
          <div class="row gx-4 gx-lg-5 ">
            <div class=" mb-5 col-xl-3 col-md-6 d-flex align-items-center">
              <div class="card h-100 px-4 text-center  bg-1">
                <h4 className="pt-4 pb-2">Age</h4>
                <p>Typically, donors must be within a certain age range, often between 17 and 65 years old. Age
                  requirements can vary by country and organization.</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex align-items-center mb-5">
              <div class="card h-100 px-4 text-center bg-2 ">
                <h4 className="pt-4 pb-2">Weight</h4>
                <p> Donors usually need to meet a minimum weight requirement, ensuring they have enough blood volume to donate safely.</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex align-items-center mb-5">
              <div class="card h-100 px-4 text-center bg-1">
                <h4 className="pt-4 pb-2">Health</h4>
                <p>Donors should be in good health with no acute illnesses or infections. Chronic conditions may not necessarily disqualify someone, depending on the condition.</p>
              </div>
            </div>
            <div class="col-xl-3 col-md-6 d-flex align-items-center mb-5">
              <div class="card h-100 px-4 text-center bg-2">
                <h4 className="pt-4 pb-2">Hemoglobin Levels</h4>
                <p>Donors need to have adequate hemoglobin levels to ensure they can tolerate the blood donation process and that their blood is suitable for transfusion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* </div> */}


      <section className='paragraph container mb-5'>
        <p className='text-center'>IT can also include Travel History: Some regions have restrictions based on recent travel to certain countries to prevent the spread of infectious diseases. Lifestyle and Risk Behaviors: Certain lifestyle choices and behaviors, such as recent drug use or high-risk sexual activity, may temporarily or permanently disqualify individuals from donating. Medical History: Certain medical conditions or medications may impact eligibility. It's important to disclose relevant medical information during the screening process. It's crucial to note that eligibility criteria can change, and specific requirements may vary by location and organization. Prospective donors should check with local blood banks or organizations for the most accurate and up-to-date information.</p>
      </section>

      <section className='gift'>
        <div className='container'>
          <div className='row'>
            <h2 className='text-center fw-semibold'>Give the gift of life: Donate blood. Your generosity has the power to save lives and create a legacy of compassion</h2>
          </div>
        </div>
      </section>

      <section class="py-3 card-div">
        <div class="container px-4 px-lg-5 mt-5">
          <h4 class="heading fw-semibold my-5 text-center"> Tips On Donation Day’s</h4>
          <div class="row gx-4 gx-lg-5 ">
            <div class=" mb-5 col-xl-4 col-md-6 d-flex align-items-center">
              <div class="card h-100 px-4 text-center  bg-1 ">
                <h4 className="pt-4 pb-2">Day before Donation</h4>
                <p>Stay Hydrated, Eat a Balanced Meal, Avoid Alcohol and Caffeine, Get a Good Night's Sleep, Review Eligibility Criteria.</p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex align-items-center mb-5">
              <div class="card h-100 px-4 text-center bg-2 ">
                <h4 className="pt-4 pb-2">Day of Donation</h4>
                <p>Eat a Nutritious Meal, Hydrate Well, Wear Comfortable Clothing, Bring Identification, Avoid Caffeine and Alcohol, Relax and Stay Calm.</p>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 d-flex align-items-center mb-5">
              <div class="card h-100 px-4 text-center bg-1">
                <h4 className="pt-4 pb-2">Day after Donation</h4>
                <p> Rest and Hydrate, Eat Nutrient-Rich Foods, Avoid Alcohol and Caffeine, Monitor for Adverse Reactions, Stay Cool, Be Aware of Long-Term Impact, Update Medical History.</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      
<Footer/>

     
    </>
  );
}

export default Home;
