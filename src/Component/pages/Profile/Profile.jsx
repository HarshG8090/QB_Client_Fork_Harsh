
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../layout/Navbar';
import '../../../App.css';



const Profile = () => {

  const navigate = useNavigate();

  const initialformData = {
    name: '',
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
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z ]*$/, 'Name should only contain letters and spaces').min(2).max(30).required('Name is required'),
    contact: Yup.string().matches(/^[0-9]{10}$/, 'Invalid contact number').required('Contact number is required'),
    alternate_Contact: Yup.string().matches(/^[0-9]{10}$/, 'Invalid alternate contact number'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    dob: Yup.date()
      .max(new Date(), 'Date of Birth cannot be in the future')
      .test('is-adult', 'Must be 18 years or older', function (value) {
        const eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
        return new Date(value) <= eighteenYearsAgo;
      })
      .required('Date of Birth is required'),
    weight: Yup.number().required('Weight is required'),
    gender: Yup.string().required('Gender is required'),
    address: Yup.string().required('Address is required'),
    bloodGrp: Yup.string().required('Blood Group is required'),
    donationDate: Yup.date(),
    six: Yup.string().required('Please select an option for the last six months'),
    consume: Yup.string().required('Please select an option for alcohol/drug consumption'),
  });


  const { formData, validationErrors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialformData,
    validationSchema,
    onSubmit: async (formData) => {
      try {

        toast.success('Form submitted successfully!');
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData)
       
        console.log(response.data);
       
        resetForm();

        navigate('/');
      } catch (error) {
        toast.error('Error submitting form. Please try again.');
        console.error('Error submitting form:', error);
      }
    },
  });


  const handleKeyDownName = (event) => {

    const allowedKeys = [8, 46]; // 8 is backspace, 46 is delete

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
                    className={`form-control ${touched.name && validationErrors.name ? 'is-invalid' : ''}`}
                    id="validationDefault01"
                    placeholder="First"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDownName}
                    disabled={formData.name.match(/[^a-zA-Z\s]/)}
                    required
                  />
                  {touched.name && validationErrors.name && <div className="invalid-feedback">{validationErrors.name}</div>}
                </div>



                <div className="col-md-3">
                  <label htmlFor="validationDefault03" className="form-label">Contact No</label>
                  <input
                    type="phone"
                    className={`form-control ${touched.contact && validationErrors.contact ? 'is-invalid' : ''}`}
                    placeholder="+91"
                    id="validationDefault03"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    required
                  />
                  {touched.contact && validationErrors.contact && <div className="invalid-feedback">{validationErrors.contact}</div>}
                </div>

                <div className="col-md-3">
                  <label htmlFor="validationDefault04" className="form-label">Alternate No</label>
                  <input
                    type="phone"
                    className={`form-control ${touched.alternate_Contact && validationErrors.alternate_Contact ? 'is-invalid' : ''}`}
                    placeholder="+91"
                    id="validationDefault04"
                    name="alternate_Contact"
                    value={formData.alternate_Contact}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                  />
                  {touched.alternate_Contact && validationErrors.alternate_Contact && <div className="invalid-feedback">{validationErrors.alternate_Contact}</div>}
                </div>
                <div className="col-md-3">
                  <label htmlFor="validationDefault05" className="form-label">Email ID</label>
                  <input
                    type="email"
                    className={`form-control ${touched.email && validationErrors.email ? 'is-invalid' : ''}`}
                    id="validationDefault05"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {touched.email && validationErrors.email && <div className="invalid-feedback">{validationErrors.email}</div>}
                </div>
              </div>
              <div className='row g-3 pt-3'>


                <div className="col-md-3">
                  <label htmlFor="validationDefault01" className="form-label">Birth Date</label>
                  <input
                    type="date"
                    className={`form-control ${touched.dob && validationErrors.dob ? 'is-invalid' : ''}`}
                    id="validationDefault01"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {touched.dob && validationErrors.dob && <div className="invalid-feedback">{validationErrors.dob}</div>}
                </div>

                <div className="col-md-2">
                  <label htmlFor="validationDefault04" className="form-label">Gender</label>
                  <select
                    className={`form-select ${touched.gender && validationErrors.gender ? 'is-invalid' : ''}`}
                    id="validationDefault04"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  >
                    <option value="" disabled>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {touched.gender && validationErrors.gender && <div className="invalid-feedback">{validationErrors.gender}</div>}
                </div>

                <div className="col-md-3">
                  <label htmlFor="validationDefault04" className="form-label">Blood Group</label>
                  <select
                    className={`form-select ${touched.bloodGrp && validationErrors.bloodGrp ? 'is-invalid' : ''}`}
                    id="validationDefault04"
                    name="bloodGrp"
                    value={formData.bloodGrp}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    <option value="#">I don't Know</option>
                  </select>
                  {touched.bloodGrp && validationErrors.bloodGrp && <div className="invalid-feedback">{validationErrors.bloodGrp}</div>}
                </div>

                <div className="col-md-2">
                  <label htmlFor="validationDefault05" className="form-label">Weight(kg)</label>
                  <input
                    type="text"
                    className={`form-control ${touched.weight && validationErrors.weight ? 'is-invalid' : ''}`}
                    id="validationDefault05"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {touched.weight && validationErrors.weight && <div className="invalid-feedback">{validationErrors.weight}</div>}
                </div>
              </div>


              <div className="row g-3 pt-3">
                <div className="col-md-3">
                  <label htmlFor="validationDefaultUsername" className="form-label">Last Donation Date</label>
                  <input
                    type="date"
                    className={`form-control ${touched.donationDate && validationErrors.donationDate ? 'is-invalid' : ''}`}
                    id="validationDefaultUsername"
                    aria-describedby="inputGroupPrepend2"
                    name="donationDate"
                    value={formData.donationDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.donationDate && validationErrors.donationDate && <div className="invalid-feedback">{validationErrors.donationDate}</div>}
                </div>

                <div className="col-md-5 mb-3 ">
                  <label htmlFor="validationCustom03" className="form-label">Address</label>
                  <input
                    type="text"
                    className={`form-control ${touched.address && validationErrors.address ? 'is-invalid' : ''}`}
                    id="validationCustom03"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {touched.address && validationErrors.address && <div className="invalid-feedback">{validationErrors.address}</div>}
                </div>
              </div>

              <div className="row pt-2">
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      value="No"
                      checked={formData.consume === 'No'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="inlineCheckbox2">
                      No
                    </label>
                  </div>
                </div>
              </div>


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