import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';
// import donate from '../images/why-donate.png'
import Navbar from '../Component/Navbar';

const handleCancel = () => {
  // window.location.href = '/';
}

const Donor = () => {

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: '',
    contact: '',
    alternate_Contact: '',
    email: '',
    dob: '',
    weight: '',
    gender: '',
    currentAddress: '',
    currentState: '',
    currentCity: '',
    currentPincode: '',
    permanentAddress: '',
    permanentState: '',
    permanentCity: '',
    permanentPincode: '',
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
    if (!formData.currentAddress.trim()) {
      newErrors.currentAddress = 'Current address is required';
      valid = false;
    }
    if (!formData.currentState.trim()) {
      newErrors.currentState = 'Current state is required';
      valid = false;
    }
    if (!formData.currentCity.trim()) {
      newErrors.currentCity = 'Current city is required';
      valid = false;
    }
    if (!formData.currentPincode.trim()) {
      newErrors.currentPincode = 'Current pincode is required';
      valid = false;
    }
    if (!formData.permanentAddress.trim()) {
      newErrors.permanentAddress = 'Permanent Address is required';
      valid = false;
    }
    if (!formData.permanentState.trim()) {
      newErrors.permanentState = 'Permanent state is required';
      valid = false;
    }
    if (!formData.permanentCity.trim()) {
      newErrors.permanentCity = 'Permanent city is required';
      valid = false;
    }
    if (!formData.permanentPincode.trim()) {
      newErrors.permanentPincode = 'Permanent Pincode is required';
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

  const handleClear = () => {
    setFormData({
      fname: '',
      contact: '',
      alternate_Contact: '',
      email: '',
      dob: '',
      weight: '',
      gender: '',
      currentAddress: '',
      currentState: '',
      currentCity: '',
      currentPincode: '',
      permanentAddress: '',
      permanentState: '',
      permanentCity: '',
      permanentPincode: '',
      bloodGrp: '',
      donationDate: '',
      six: '',
      consume: '',
      hiv: '',
      msg: '',
    });
  };

  return (
    <>
      <div className="">
        <Navbar />
        <div className="home-donor-form">
          <section className="form-donor">
            <div className='form-center col-md-7'>
              <div className=" overflow-x-hidden">
                <h1 className="h4 fs-2 text-danger text-center pb-4">Registration Form</h1>
                <form className='overflow-hidden' id="myForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-4 px-3">
                      <label htmlFor="validationDefault01" className="form-label">  Full Name</label>
                      <input
                        type="text"
                        className={`form-control ${errors.fname ? 'is-invalid' : ''}`}
                        id="validationDefault01"
                        placeholder="Full Name"
                        name="fname"
                        value={formData.fname}
                        onChange={onInputChange}
                        required
                      />
                      {errors.fname && <div className="invalid-feedback">{errors.fname}</div>}
                    </div>

                    <div className="col-md-4 px-3">
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

                    <div className="col-md-4 px-3">
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
                    <div className="col-md-4 px-3">
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

                    <div className="col-md-4 px-3">
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
                      <label htmlFor="validationDefault05" className="form-label">Weight (kg)</label>
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
                    <div className="col-md-6 mt-3 px-3">
                      <label htmlFor="validationCustom03">Current Address</label>
                      <input type="text" className={`form-control ${errors.currentAddress ? 'is-invalid' : ''}`} id="validationCustom03" name="currentAddress" value={formData.currentAddress} onChange={onInputChange} required />
                      {errors.currentAddress && <div className="invalid-feedback">{errors.currentAddress}</div>}
                      <div className="row py-3">
                        <div className="col-md-5">
                          <label htmlFor="stateDropdown" className="form-label">State:</label>
                          <select className='form-select' id="stateDropdown" name='currentState' value={formData.currentState} onChange={onInputChange} required >
                            <option value="" className='px-3'>Select state</option>
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
                          <input type="text" className={`form-control ${errors.currentCity ? 'is-invalid' : ''}`} id="validationPincode" name='currentCity' value={formData.currentCity} onChange={onInputChange} required />
                          {errors.currentCity && <div className="invalid-feedback">{errors.currentCity}</div>}
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="validationPincode" className="form-label">Pincode</label>
                          <input type="pincode" className={`form-control ${errors.currentPincode ? 'is-invalid' : ''}`} id="validationPincode" name='currentPincode' value={formData.currentPincode} onChange={onInputChange} required />
                          {errors.currentPincode && <div className="invalid-feedback">{errors.currentPincode}</div>}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 my-3 px-3">
                      <label htmlFor="validationCustom03">Permanent Address</label>
                      <input type="text" className={`form-control ${errors.permanentAddress ? 'is-invalid' : ''}`} id="validationCustom03" name='permanentAddress' value={formData.permanentAddress} onChange={onInputChange} required />
                      {errors.permanentAddress && <div className="invalid-feedback">{errors.permanentAddress}</div>}
                      <div className="row pt-3">
                        <div className="col-md-5">
                          <label htmlFor="stateDropdown" className="form-label">State:</label>
                          <select className='form-select' id="stateDropdown" name='permanentState' value={formData.permanentState} onChange={onInputChange} required>
                            <option value="" className='px-3'>Select  state</option>
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
                          <input type="text" className={`form-control ${errors.permanentCity ? 'is-invalid' : ''}`} id="validationPincode" name='permanentCity' value={formData.permanentCity} onChange={onInputChange} required />
                          {errors.permanentCity && <div className="invalid-feedback">{errors.permanentCity}</div>}
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="validationPincode" className="form-label">Pincode</label>
                          <input type="text" className={`form-control ${errors.permanentPincode ? 'is-invalid' : ''}`} id="validationPincode" name='permanentPincode' value={formData.permanentPincode} onChange={onInputChange} required />
                          {errors.permanentPincode && <div className="invalid-feedback">{errors.permanentPincode}</div>}
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

                    <div className="col-md-4 px-5 px-md-4">
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

                    <div className="col-md-4 px-5  px-md-4">
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
                  <div className="row pt-2">
  <div className="col-md-8 mt-2">
    <p>In the last six months, have you had any of the following?</p>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        id="inlineRadio1"
        name="six"
        value='Tattooing'
        checked={formData.six === 'Tattooing'}
        onChange={onInputChange}
      />
      <label className="form-check-label" htmlFor="inlineRadio1">
        Tattooing
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        id="inlineRadio2"
        name="six"
        value="Piercing"
        checked={formData.six === 'Piercing'}
        onChange={onInputChange}
      />
      <label className="form-check-label" htmlFor="inlineRadio2">
        Piercing
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        id="inlineRadio3"
        name="six"
        value="Other"
        checked={formData.six === 'Other'}
        onChange={onInputChange}
      />
      <label className="form-check-label" htmlFor="inlineRadio3">
        Other
      </label>
    </div>
  </div>
  </div>

                  <div className="row pt-2 mt-3">
                    <div className="col-md-8">
                      <div className="form-group shadow-textarea">
                        <label htmlFor="exampleFormControlTextarea6">Your medical history if any?</label>
                        <textarea className={`form-control mt-2 ${errors.msg ? 'is-invalid' : ''}`} id="exampleFormControlTextarea6" rows="2" placeholder="Sugar, Hemoglobin, BP, Cancer" name='msg' value={formData.msg} onChange={onInputChange} required></textarea>
                        {errors.msg && <div className="invalid-feedback">{errors.msg}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row text-danger">
                    {Object.keys(errors).map((key) => (
                      <div key={key} className="col-12">
                        {errors[key]}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-secondary mt-4" style={{ marginRight: '20px' }}>Submit Form</button>
                    <button type="button" className="btn btn-secondary mt-4" onClick={handleClear}>
                      Clear Form
                    </button>
                  </div>
                </form>

                <div className="cancel-btn" style={{ position: 'absolute', top: '3%', left: '95%', transform: 'translate(-50%, -50%)' }} >
                  <Link to="/" onClick={handleCancel}>
                    <i class="fa-solid fa-xmark fa-2xl" style={{ color: '#26282b' }}></i>
                  </Link>
                </div>
                <ToastContainer />
              </div >
            </div >
          </section>
        </div>
      </div>
    </>
  );
};

export default Donor;
