import React, { useState } from 'react';
import Navbar from '../../Component/Navbar';
import axios from "axios";
import '../../App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

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
    address: '',
    bloodGrp: '',
    donationDate: '',
    six: '',
    consume: '',
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
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
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
    if (!formData.six) {
      newErrors.six = 'Select an option for the last six months question';
      valid = false;
    }
    if (!formData.consume) {
      newErrors.consume = 'Select an option for the alcohol/drugs consumption question';
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
          address: '',
          bloodGrp: '',
          donationDate: '',
          six: '',
          consume: '',
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
      <Navbar />

      <body className='overflow-hidden profile-bg mt-5 pb-5'>
        <div className='body-color'>
          <div className="container overflow-x-hidden">
            <h1 className=" my-5 h1 fs-2 fw-bold pt-5 ">My Profile</h1>
            <form className='overflow-hidden mb-5' id="myForm" onSubmit={handleSubmit}>
              <div className="row ">
                <div className="col-md-2">
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

                <div className="col-md-2 py-2">
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

                <div className="col-md-3">
                  <label htmlFor="validationDefault03" className="form-label">Contact No</label>
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

                <div className="col-md-3">
                  <label htmlFor="validationDefault04" className="form-label">Alternate No</label>
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
                <div className="col-md-2">
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

                <div className="col-md-3">
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

                <div className="col-md-2">
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

                <div className="col-md-3">
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

                <div className="col-md-2">
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


              <div className="row g-3 pt-3">


                <div className="col-md-3">
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

                <div className="col-md-6 mb-3 ">
                  <label htmlFor="validationCustom03" className="form-label">Address</label>
                  <input
                    type="text"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    id="validationCustom03"
                    name="address"
                    value={formData.address}
                    onChange={onInputChange}
                    required
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>

                {/* Continue adding similar blocks for other fields... */}

              </div>

              <div className="row pt-2">
                {/* ... (previous fields) */}

                <div className="col-md-5 mt-2">
                  <p>In the last six months, have you had any of the following?</p   >
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineCheckbox1"
                      name='six'
                      value="tattooing"
                      checked={formData.six === 'tattooing'}
                      onChange={onInputChange}
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox1">
                      Tattooing
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineCheckbox2"
                      name='six'
                      value="piercing"
                      checked={formData.six === 'piercing'}
                      onChange={onInputChange}
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">
                      Piercing
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineCheckbox3"
                      name='six'
                      value="other"
                      checked={formData.six === 'other'}
                      onChange={onInputChange}
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox3">
                      Other
                    </label>
                  </div>
                </div>

                <div className="col-md-4 mt-3 mt-md-0">
                  <p>Do you consume Alcohol/Drugs?</p>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineCheckbox1"
                      name="consume"
                      value="Yes"
                      checked={formData.consume === 'Yes'}
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
                      value="No"
                      checked={formData.consume === 'No'}
                      onChange={onInputChange}
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">
                      No
                    </label>
                  </div>
                </div>
              </div>

              {/* Display error messages for each field */}
              {Object.keys(errors).map((key) => (
                <div key={key} className='text-danger'>
                  {errors[key]}
                </div>
              ))}

              <button type="submit" className="btn btn-secondary mt-4 mx-auto mx-md-0 d-block d-md-inline ">Submit Form</button>
            </form>
            <ToastContainer />
          </div >
        </div >
      </body >

    </>
  );
};


export default Profile;