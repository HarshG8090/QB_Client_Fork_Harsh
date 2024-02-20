import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../../Component/layout/Navbar';
import '../../App.css';

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

  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);





  const citiesByState = {
    AndhraPradesh: ['Amaravati', 'Visakhapatnam', 'Vijayawada', 'Tirupati', 'Kurnool'],
    ArunachalPradesh: ['Itanagar', 'Naharlagun', 'Pasighat', 'Roing', 'Tezu'],
    Assam: ['Guwahati', 'Dispur', 'Jorhat', 'Silchar', 'Dibrugarh'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'],
    TamilNadu: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
    Karnataka: ['Bangalore', 'Mysuru', 'Hubballi', 'Mangalore', 'Belagavi'],

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));


    setValidationErrors((validationErrors) => ({
      ...validationErrors,
      [name]: '',
    }));

  };


  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'fname':
        error = !value.match(/^[A-Za-z ]*$/) ? 'Name should only contain letters and spaces' : '';
        break;
      case 'contact':
        error = !/^\d{10}$/.test(value) ? 'Contact must be 10 digits' :
          value.length !== 10 ? 'Contact must be exactly 10 digits' : '';
        break;
      case 'alternate_Contact':
        error = !/^\d{10}$/.test(value) ? 'Alternate Contact must be 10 digits' : '';
        break;
      case 'email':
        error = !/^\S+@\S+\.\S+$/.test(value) ? 'Invalid Email format' : '';
        break;

      case 'dob':
        if (!value) {
          return 'Date of Birth is required';
        }
        const currentDate = new Date();
        const selectedDate = new Date(value);
        if (selectedDate > currentDate) {
          return 'Invalid Date of Birth';
        }
        const ageDiff = currentDate.getFullYear() - selectedDate.getFullYear();
        const isUnder18 = ageDiff < 18 || (ageDiff === 18 && currentDate < new Date(currentDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()));
        return isUnder18 ? 'Must be 18 years or older' : '';

      case 'weight':
        error = !value ? 'Weight is required' : '';
        break;
      case 'gender':
        error = !value ? 'Gender is required' : '';
        break;
      case 'currentAddress':
        error = !value ? 'Current Address is required' : '';
        break;
      case 'currentState':
        error = !value ? 'Current State is required' : '';
        break;
      case 'currentCity':
        error = !value ? 'Current City is required' : '';
        break;
      case 'currentPincode':
        error = !/^[0-9]{6}$/.test(value) ? 'Pincode must be a 6-digit number' : '';
        break;
      case 'permanentAddress':
        error = !value ? 'Permanent Address is required' : '';
        break;
      case 'permanentState':
        error = !value ? 'Permanent State is required' : '';
        break;
      case 'permanentCity':
        error = !value ? 'Permanent City is required' : '';
        break;
      case 'permanentPincode':
        error = !/^[0-9]{6}$/.test(value) ? 'Pincode must be a 6-digit number' : '';
        break;
      case 'bloodGrp':
        error = !value ? 'Blood Group is required' : '';
        break;
      case 'donationDate':
        error = !value ? 'Donation Date is required' : '';
        break;
      case 'consume':
        error = !value ? 'Please select an option for alcohol/drug consumption' : '';
        break;
      case 'hiv':
        error = !value ? 'Please select an option' : '';
        break;
      case 'msg':
        error = !value ? 'Please provide your medical history if any' : '';
        break;

      default:
        return '';
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();



    const errors = {};
    for (const [name, value] of Object.entries(formData)) {
      const error = validateField(name, value);
      if (error) {
        errors[name] = error;
      }
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      console.log('Form validation failed');
      return;
    }


    try {

      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      toast.success('Form submitted successfully!');
      console.log('Form submitted successfully!');
      console.log(response.data);
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

      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (error) {
      toast.error('Error submitting form. Please try again.');
      console.error('Error submitting form:', error);
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
    setValidationErrors({});
  };

  const handleKeyDownName = (event) => {
    const allowedKeys = [8, 46];

    if (
      !(
        (event.keyCode >= 65 && event.keyCode <= 90) ||
        (event.keyCode >= 97 && event.keyCode <= 122) ||
        event.keyCode === 32 ||
        allowedKeys.includes(event.keyCode)
      )
    ) {
      event.preventDefault();
    }
  };

  const handleKeyDown = (event) => {
    if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode !== 8) {
      event.preventDefault();
    }
  };
  const handleCancel = () => {
    navigate('/');
  }

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
                      <label htmlFor="validationDefault01" className="form-label">Full Name</label>
                      <input
                        type="text"
                        className={`form-control ${validationErrors.fname ? 'is-invalid' : ''}`}
                        id="validationDefault01"
                        placeholder="Full Name"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        onKeyDown={handleKeyDownName}
                        disabled={formData.fname.match(/[^a-zA-Z\s]/)}
                        required
                      />
                      {validationErrors.fname && <div className="invalid-feedback">{validationErrors.fname}</div>}
                    </div>

                    <div className="col-md-4 px-3">
                      <label htmlFor="validationDefault03" className="form-label">Contact</label>
                      <input
                        type="tel"
                        className={`form-control ${validationErrors.contact ? 'is-invalid' : ''}`}
                        placeholder="+91"
                        id="validationDefault03"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}

                        onKeyDown={handleKeyDown}
                        required
                      />
                      {validationErrors.contact && <div className="invalid-feedback">{validationErrors.contact}</div>}
                    </div>

                    <div className="col-md-4 px-3">
                      <label htmlFor="validationDefault04" className="form-label">Alternate Contact</label>
                      <input
                        type="tel"
                        className={`form-control ${validationErrors.alternate_Contact ? 'is-invalid' : ''}`}
                        placeholder="+91"
                        id="validationDefault04"
                        name="alternate_Contact"
                        value={formData.alternate_Contact}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}

                      />
                      {validationErrors.alternate_Contact && <div className="invalid-feedback">{validationErrors.alternate_Contact}</div>}
                    </div>
                  </div>

                  <div className='row g-3 pt-3'>
                    <div className="col-md-4 px-3">
                      <label htmlFor="validationDefault05" className="form-label">Email ID</label>
                      <input
                        type="email"
                        className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
                        id="validationDefault05"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {validationErrors.email && <div className="invalid-feedback">{validationErrors.email}</div>}
                    </div>

                    <div className="col-md-4 px-3">
                      <label htmlFor="validationDefault01" className="form-label">Birth Date</label>
                      <input
                        type="date" placeholder='dd-mm-yyyy'
                        className={`form-control ${validationErrors.dob ? 'is-invalid' : ''}`}
                        id="validationDefault01"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                      />
                      {validationErrors.dob && <div className="invalid-feedback">{validationErrors.dob}</div>}
                    </div>

                    <div className="col-md-4 px-3">
                      <label htmlFor="validationDefault04" className="form-label">Gender</label>
                      <select
                        className={`form-select ${validationErrors.gender ? 'is-invalid' : ''}`}
                        id="validationDefault04"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      {validationErrors.gender && <div className="invalid-feedback">{validationErrors.gender}</div>}
                    </div>

                    <div className="col-md-4 px-3">
                      <label htmlFor="validationDefault04" className="form-label">Blood Group</label>
                      <select
                        className={`form-select ${validationErrors.bloodGrp ? 'is-invalid' : ''}`}
                        id="validationDefault04"
                        name="bloodGrp"
                        value={formData.bloodGrp}
                        onChange={handleChange}
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
                      {validationErrors.bloodGrp && <div className="invalid-feedback">{validationErrors.bloodGrp}</div>}
                    </div>

                    <div className="col-md-4 px-3">
                      <label htmlFor="validationDefault05" className="form-label">Weight (kg)</label>
                      <input
                        type="text"
                        className={`form-control ${validationErrors.weight ? 'is-invalid' : ''}`}
                        id="validationDefault05"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                      />
                      {validationErrors.weight && <div className="invalid-feedback">{validationErrors.weight}</div>}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mt-3 px-3">
                      <label htmlFor="validationCustom03">current Address</label>
                      <input
                        type="text"
                        className={`form-control ${validationErrors.currentAddress ? 'is-invalid' : ''}`}
                        id="validationCustom03"
                        name="currentAddress"
                        value={formData.currentAddress}
                        onChange={handleChange}
                        required
                      />
                      {validationErrors.currentAddress && <div className="invalid-feedback">{validationErrors.currentAddress}</div>}

                      <div className="row py-3">
                        <div className="col-md-12">
                          <label htmlFor="stateDropdown" className="form-label">State:</label>
                          <select
                            className='form-select'
                            id="stateDropdown"
                            name='currentState'
                            value={formData.currentState}
                            onChange={handleChange}
                            required
                          >
                            <option value="" className='px-3'>Select state</option>
                            {Object.keys(citiesByState).map((state) => (
                              <option key={state} value={state}>
                                {state}
                              </option>
                            ))}

                          </select>
                        </div>
                        <div className="col-md-6 mt-mobile">

                          <label htmlFor="validationDefault04" className="form-label">
                            City
                          </label>
                          <select
                            className={`form-select ${validationErrors.currentCity ? 'is-invalid' : ''}`}
                            id="validationPincode"
                            name="currentCity"
                            value={formData.currentCity}
                            onChange={handleChange}
                          >
                            <option value="" className="px-3">
                              Select city
                            </option>
                            {citiesByState[formData.currentState]?.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                          {validationErrors.currentCity && <div className="invalid-feedback">{validationErrors.currentCity}</div>}
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="validationPincode" className="form-label">Pincode</label>
                          <input
                            type="text"
                            className={`form-control ${validationErrors.currentPincode ? 'is-invalid' : ''}`}
                            id="validationPincode"
                            name='currentPincode'
                            value={formData.currentPincode}
                            onChange={handleChange}
                            required
                          />
                          {validationErrors.currentPincode && <div className="invalid-feedback">{validationErrors.currentPincode}</div>}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 my-3 px-3">
                      <label htmlFor="validationCustom03">permanent Address</label>
                      <input
                        type="text"
                        className={`form-control ${validationErrors.permanentAddress ? 'is-invalid' : ''}`}
                        id="validationCustom03"
                        name='permanentAddress'
                        value={formData.permanentAddress}
                        onChange={handleChange}
                        required
                      />
                      {validationErrors.permanentAddress && <div className="invalid-feedback">{validationErrors.permanentAddress}</div>}

                      <div className="row pt-3">
                        <div className="col-md-12">
                          <label htmlFor="stateDropdown" className="form-label">State:</label>
                          <select
                            className='form-select'
                            id="stateDropdown"
                            name='permanentState'
                            value={formData.permanentState}
                            onChange={handleChange}
                            required
                          >
                            <option value="" className='px-3'>Select  state</option>
                            {Object.keys(citiesByState).map((state) => (
                              <option key={state} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6 mt-mobile">
                          <label htmlFor="validationDefault04" className="form-label">City</label>
                          <select
                            className={`form-select ${validationErrors.permanentCity ? 'is-invalid' : ''}`}
                            id="validationPincode"
                            name="permanentCity"
                            value={formData.permanentCity}
                            onChange={handleChange}
                          >
                            <option value="" className="px-3">
                              Select city
                            </option>
                            {citiesByState[formData.permanentState]?.map((city) => (
                              <option key={city} value={city}>
                                {city}
                              </option>
                            ))}
                          </select>
                          {validationErrors.permanentCity && <div className="invalid-feedback">{validationErrors.permanentCity}</div>}
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="validationPincode" className="form-label">Pincode</label>
                          <input
                            type="text"
                            className={`form-control ${validationErrors.permanentPincode ? 'is-invalid' : ''}`}
                            id="validationPincode"
                            name='permanentPincode'
                            value={formData.permanentPincode}
                            onChange={handleChange}
                          // required
                          />
                          {validationErrors.permanentPincode && <div className="invalid-feedback">{validationErrors.permanentPincode}</div>}
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="row g-3">
                    <div className="col-md-4 px-3">
                      <label htmlFor="validationDefaultUsername" className="form-label">Recently Donated</label>
                      <input
                        type="date"
                        className={`form-control ${validationErrors.donationDate ? 'is-invalid' : ''}`}
                        id="validationDefaultUsername"
                        aria-describedby="inputGroupPrepend2"
                        name="donationDate"
                        value={formData.donationDate}
                        onChange={handleChange}

                      />
                      {validationErrors.donationDate && <div className="invalid-feedback">{validationErrors.donationDate}</div>}
                    </div>

                    <div className="col-md-4 px-md-4">
                      <p>Do you consume Alcohol/Drugs?</p>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="inlineCheckbox1"
                          name="consume"
                          value="true"
                          checked={formData.consume === 'true'}
                          onChange={handleChange}

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
                          onChange={handleChange}

                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">
                          No
                        </label>
                      </div>
                    </div>

                    <div className="col-md-4 px-md-4">
                      <p>Have you ever tested HIV Positive?</p>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="inlineCheckbox3"
                          name="hiv"
                          value="Yes"
                          checked={formData.hiv === 'Yes'}
                          onChange={handleChange}

                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="inlineCheckbox4"
                          name="hiv"
                          value="false"
                          checked={formData.hiv === 'false'}
                          onChange={handleChange}

                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox4">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-6 mt-2">
                      <p>In the last six months, have you had any of the following?</p>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="inlineRadio1"
                          name="six"
                          value='Tattooing'
                          checked={formData.six === 'Tattooing'}
                          onChange={handleChange}

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
                          onChange={handleChange}

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
                          onChange={handleChange}

                        />
                        <label className="form-check-label" htmlFor="inlineRadio3">
                          Other
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group shadow-textarea mt-mobile">
                        <label htmlFor="exampleFormControlTextarea6">Your medical history if any?</label>
                        <textarea
                          className={`form-control mt-2 ${validationErrors.msg ? 'is-invalid' : ''}`}
                          id="exampleFormControlTextarea6"
                          rows="2"
                          placeholder="Sugar, Hemoglobin, BP, Cancer"
                          name="msg"
                          value={formData.msg}
                          onChange={handleChange}
                          required
                        ></textarea>
                        {validationErrors.msg && <div className="invalid-feedback">{validationErrors.msg}</div>}
                      </div>
                    </div>

                  </div>


                  <div className="text-center">
                    <button type="submit" className="btn btn-secondary mt-4" style={{ marginRight: '20px' }}>Submit Form</button>
                    <button type="button" className="btn btn-secondary mt-4" onClick={handleClear}>
                      Clear Form
                    </button>
                  </div>
                </form>

                <div className="cancel-btn overflow-hidden" style={{ position: 'absolute', top: '3%', left: '95%', transform: 'translate(-50%, -50%)' }} >
                  <Link to="/" onClick={handleCancel}>
                    <i class="fa-solid fa-xmark fa-sxl" style={{ color: '#26282b' }}></i>
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
