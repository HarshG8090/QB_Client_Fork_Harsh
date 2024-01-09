import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';
import donate from '../images/why-donate.png'
import Navbar from '../Component/Navbar';

const handleCancel = () =>{
  // window.location.href = '/';
}

const Donor = () => {

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    contact: '',
    alternate_Contact: '',
    email: '',
    dob: '',
    weight: '',
    gender: '',
    CurrentAddress: '',
    CurrentState: '',
    CurrentCity: '',
    CurrentPincode: '',
    PermanentAddress: '',
    PermanentState: '',
    PermanentCity: '',
    PermanentPincode: '',
    bloodGrp: '',
    donationDate: '',
    six: '',
    consume: '',
    hiv: '',
    msg: '',
  });

  const [errors, setErrors] = useState({});

  const onInputChange = (e) => {
    if (e.target.type === 'radio') {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.fname.trim()) {
      newErrors.fname = 'First Name is required';
      valid = false;
    }
    if (!formData.lname.trim()) {
      newErrors.lname = 'Last Name is required';
      valid = false;
    }
    if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = 'Contact must be 10 digits';
      valid = false;
    }
    if (!/^\d{10}$/.test(formData.alternate_Contact)) {
      newErrors.alternate_Contact = 'Contact must be 10 digits';
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid Email format';
      valid = false;
    }
    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required';
      valid = false;
    }
    if (!formData.weight.trim()) {
      newErrors.weight = 'Weight is required';
      valid = false;
    }
    if (!formData.gender.trim()) {
      newErrors.gender = 'Gender is required';
      valid = false;
    }
    if (!formData.CurrentAddress.trim()) {
      newErrors.CurrentAddress = 'Current address is required';
      valid = false;
    }
    if (!formData.CurrentState.trim()) {
      newErrors.CurrentState = 'Current state is required';
      valid = false;
    }
    if (!formData.CurrentCity.trim()) {
      newErrors.CurrentCity = 'Current city is required';
      valid = false;
    }
    if (!formData.CurrentPincode.trim()) {
      newErrors.CurrentPincode = 'Current pincode is required';
      valid = false;
    }
    if (!formData.PermanentAddress.trim()) {
      newErrors.PermanentAddress = 'Permanent Address is required';
      valid = false;
    }
    if (!formData.PermanentState.trim()) {
      newErrors.PermanentState = 'Permanent state is required';
      valid = false;
    }
    if (!formData.PermanentCity.trim()) {
      newErrors.PermanentCity = 'Permanent city is required';
      valid = false;
    }
    if (!formData.PermanentPincode.trim()) {
      newErrors.PermanentPincode = 'Permanent Pincode is required';
      valid = false;
    }
    if (!formData.bloodGrp.trim()) {
      newErrors.bloodGrp = 'Blood Group is required';
      valid = false;
    }
    if (!formData.donationDate) {
      newErrors.donationDate = 'Donation Date is required';
      valid = false;
    }
    if (!formData.hiv) {
      newErrors.hiv = 'Select an option for the HIV positive or not';
      valid = false;
    }
    if (!formData.consume) {
      newErrors.consume = 'Select an option for the alcohol/drugs consumption question';
      valid = false;
    }
    if (!formData.msg) {
      newErrors.msg = 'Select an option  for your medical history if any?';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        toast.success('Data submitted successfully!', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
        });
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);

        console.log('Form submitted successfully!', response.data);


        setFormData({
          fname: '',
          lname: '',
          contact: '',
          alternate_Contact: '',
          email: '',
          dob: '',
          weight: '',
          gender: '',
          CurrentAddress: '',
          CurrentState: '',
          CurrentCity: '',
          CurrentPincode: '',
          PermanentAddress: '',
          PermanentState: '',
          PermanentCity: '',
          PermanentPincode: '',
          bloodGrp: '',
          donationDate: '',
          six: '',
          consume: '',
          hiv: '',
          msg: '',
        });


        navigate('/');
      } catch (error) {
        console.error('Error submitting form:', error);


        toast.error('An error occurred. Please try again later.', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    } else {

      toast.error('Please fill in all required fields with valid data.', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <>

      <div className="blur">

        <Navbar />
        <div className="mb-5"></div>

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
      </div>

      <section className="form-donor">
        <body className='overflow-hidden pb-5'>
          <div className='form-center'>
            <div className="container overflow-x-hidden">
              <h1 className=" my-5 h4 fs-2 fw-bold text-center">Registration Form</h1>
              <form className='overflow-hidden mb-5' id="myForm" onSubmit={handleSubmit}>
                <div className="row  g-3">
                  <div className="col-md-6 px-3">
                    <label htmlFor="validationDefault01" className="form-label"> Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.fname ? 'is-invalid' : ''}`}
                      id="validationDefault01"
                      placeholder="First"
                      name="fname"
                      value={formData.fname}
                      onChange={onInputChange}
                      required
                    />


                    {errors.fname && <div className="invalid-feedback">{errors.fname}</div>}
                  </div>

                  <div className="col-md-6 py-2 px-3">
                    <label htmlFor="validationDefault02" className="form-label">  </label>
                    <input
                      type="text"
                      className={`form-control ${errors.lname ? 'is-invalid' : ''}`}
                      id="validationDefault02"
                      placeholder="Last"
                      name="lname"
                      value={formData.lname}
                      onChange={onInputChange}
                      required
                    />
                    {errors.lname && <div className="invalid-feedback">{errors.lname}</div>}
                  </div>

                  <div className="col-md-6 px-3">
                    <label htmlFor="validationDefault03" className="form-label">Contact</label>
                    <input
                      type="phone"
                      className={`form-control ${errors.contact ? 'is-invalid' : ''}`}
                      placeholder="+91"
                      id="validationDefault03"
                      name="contact"
                      value={formData.contact}
                      onChange={onInputChange}
                      required
                    />
                    {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
                  </div>

                  <div className="col-md-6 px-3">
                    <label htmlFor="validationDefault04" className="form-label">Alternate Contact</label>
                    <input
                      type="phone"
                      className={`form-control ${errors.alternate_Contact ? 'is-invalid' : ''}`}
                      placeholder="+91"
                      id="validationDefault04"
                      name="alternate_Contact"
                      value={formData.alternate_Contact}
                      onChange={onInputChange}
                      required
                    />
                    {errors.alternate_Contact && <div className="invalid-feedback">{errors.alternate_Contact}</div>}
                  </div>
                </div>
                <div className='row g-3 pt-3'>
                  <div className="col-md-6 px-3">
                    <label htmlFor="validationDefault05" className="form-label">Email ID</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="validationDefault05"
                      name="email"
                      value={formData.email}
                      onChange={onInputChange}
                      required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="col-md-6 px-3">
                    <label htmlFor="validationDefault01" className="form-label">Birth Date</label>
                    <input
                      type="date"
                      className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                      id="validationDefault01"
                      name="dob"
                      value={formData.dob}
                      onChange={onInputChange}
                      required
                    />
                    {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                  </div>

                  <div className="col-md-4 px-3">
                    <label htmlFor="validationDefault04" className="form-label">Gender</label>
                    <select
                      className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                      id="validationDefault04"
                      name="gender"
                      value={formData.gender}
                      onChange={onInputChange}
                      required
                    >
                      <option value="" disabled>Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                  </div>

                  <div className="col-md-4 px-3">
                    <label htmlFor="validationDefault04" className="form-label">Blood Group</label>
                    <select
                      className={`form-select ${errors.bloodGrp ? 'is-invalid' : ''}`}
                      id="validationDefault04"
                      name="bloodGrp"
                      value={formData.bloodGrp}
                      onChange={onInputChange}
                      required
                    >
                      <option value="" disabled>Choose</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                    {errors.bloodGrp && <div className="invalid-feedback">{errors.bloodGrp}</div>}
                  </div>

                  <div className="col-md-4 px-3">
                    <label htmlFor="validationDefault05" className="form-label">Weight</label>
                    <input
                      type="text"
                      className={`form-control ${errors.weight ? 'is-invalid' : ''}`}
                      id="validationDefault05"
                      name="weight"
                      value={formData.weight}
                      onChange={onInputChange}
                      required
                    />
                    {errors.weight && <div className="invalid-feedback">{errors.weight}</div>}
                  </div>



                </div>


                <div className="row">
                  <div className="col-md-12 mt-3 px-3">
                    <label htmlFor="validationCustom03">Current Address</label>
                    <input type="text" className={`form-control ${errors.CurrentAddress ? 'is-invalid' : ''}`} id="validationCustom03" name="CurrentAddress" value={formData.CurrentAddress} onChange={onInputChange} required />
                    {errors.CurrentAddress && <div className="invalid-feedback">{errors.CurrentAddress}</div>}
                    <div className="row py-3">
                      <div className="col-md-5">
                        <label htmlFor="stateDropdown" className="form-label">State:</label>
                        <select className='form-select' id="stateDropdown" name='CurrentState' value={formData.CurrentState} onChange={onInputChange} required >
                          <option value="" className='px-3'>Select a state</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">Himachal Pradesh</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="validationDefault04" className="form-label">City</label>
                        <input type="text" className={`form-control ${errors.CurrentCity ? 'is-invalid' : ''}`} id="validationPincode" name='CurrentCity' value={formData.CurrentCity} onChange={onInputChange} required />
                        {errors.CurrentCity && <div className="invalid-feedback">{errors.CurrentCity}</div>}
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="validationPincode" className="form-label">Pincode</label>
                        <input type="pincode" className={`form-control ${errors.CurrentPincode ? 'is-invalid' : ''}`} id="validationPincode" name='CurrentPincode' value={formData.CurrentPincode} onChange={onInputChange} required />
                        {errors.CurrentPincode && <div className="invalid-feedback">{errors.CurrentPincode}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3 px-3">
                    <label htmlFor="validationCustom03">Permanent Address</label>
                    <input type="text" className={`form-control ${errors.PermanentAddress ? 'is-invalid' : ''}`} id="validationCustom03" name='PermanentAddress' value={formData.PermanentAddress} onChange={onInputChange} required />
                    {errors.PermanentAddress && <div className="invalid-feedback">{errors.PermanentAddress}</div>}
                    <div className="row pt-3">
                      <div className="col-md-5">
                        <label htmlFor="stateDropdown" className="form-label">State:</label>
                        <select className='form-select' id="stateDropdown" name='PermanentState' value={formData.PermanentState} onChange={onInputChange} required>
                          <option value="" className='px-3'>Select a state</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">Himachal Pradesh</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="validationDefault04" className="form-label">City</label>
                        <input type="text" className={`form-control ${errors.PermanentCity ? 'is-invalid' : ''}`} id="validationPincode" name='PermanentCity' value={formData.PermanentCity} onChange={onInputChange} required />
                        {errors.PermanentCity && <div className="invalid-feedback">{errors.PermanentCity}</div>}
                      </div>
                      <div className="col-md-3">
                        <label htmlFor="validationPincode" className="form-label">Pincode</label>
                        <input type="pincode" className={`form-control ${errors.PermanentPincode ? 'is-invalid' : ''}`} id="validationPincode" name='PermanentPincode' value={formData.PermanentPincode} onChange={onInputChange} required />
                        {errors.PermanentPincode && <div className="invalid-feedback">{errors.PermanentPincode}</div>}
                      </div>
                    </div>
                  </div>
                </div>


                <div className="row g-3 pt-3">
                  <div className="col-md-4 px-3">
                    <label htmlFor="validationDefaultUsername" className="form-label">Last Donation Date</label>
                    <input
                      type="date"
                      className={`form-control ${errors.donationDate ? 'is-invalid' : ''}`}
                      id="validationDefaultUsername"
                      aria-describedby="inputGroupPrepend2"
                      name="donationDate"
                      value={formData.donationDate}
                      onChange={onInputChange}
                    />
                    {errors.donationDate && <div className="invalid-feedback">{errors.donationDate}</div>}
                  </div>

                  <div className="col-md-4 px-5">
                    <p>Do you consume Alcohol/Drugs?</p>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineCheckbox1"
                        name="consume"
                        value="true"
                        checked={formData.consume === 'true'}
                        onChange={onInputChange}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineCheckbox2"
                        name="consume"
                        value="false"
                        checked={formData.consume === 'false'}
                        onChange={onInputChange}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">
                        No
                      </label>
                    </div>
                  </div>

                  <div className="col-md-4 px-5">
                    <p>Have you ever tested HIV Positive?</p>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineCheckbox1"
                        name="hiv"
                        value="Yes"
                        checked={formData.hiv === 'Yes'}
                        onChange={onInputChange}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="inlineCheckbox2"
                        name="hiv"
                        value="false"
                        checked={formData.hiv === 'false'}
                        onChange={onInputChange}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">
                        No
                      </label>
                    </div>
                  </div>



                </div>

                <div className="row pt-2 mt-3">
                  <div className="col-md-12">
                    <div className="form-group shadow-textarea">
                      <label htmlFor="exampleFormControlTextarea6">Your medical history if any?</label>
                      <textarea className={`form-control mt-2 ${errors.msg ? 'is-invalid' : ''}`} id="exampleFormControlTextarea6" rows="2" placeholder="Sugar, Hemoglobin, BP, Cancer" name='msg' value={formData.msg} onChange={onInputChange} required></textarea>
                      {errors.msg && <div className="invalid-feedback">{errors.msg}</div>}
                    </div>
                  </div>
                </div>



                {/* Display error messages for each field */}
                <div className="row text-danger">
              {Object.keys(errors).map((key) => (
                <div key={key} className="col-12">
                  {errors[key]}
                </div>
              ))}
            </div>

<div className="text-center">
                <button type="submit" className="btn btn-secondary mt-4">Submit Form</button>
                </div>
              </form>

<div className="cancel-btn" style={{ position:'absolute', top:'3%' ,left:'95%' , transform:'translate(-50%, -50%)' }} >
  <Link to="/" onClick={handleCancel}>
  <i class="fa-solid fa-xmark fa-2xl" style={{color: '#26282b'}}></i>
  </Link>
</div>

              <ToastContainer />
            </div >
          </div >
        </body >
      </section>



    </>
  );
};

export default Donor;
