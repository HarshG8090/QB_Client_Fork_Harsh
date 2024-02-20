import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {Link}  from 'react-router-dom';




const Hospital = () => {

  const [formData, setFormData] = useState({
    hospitalName:'',
    hospitalAddress:'',
    currentState: '',
    currentCity: '',
    currentPincode: '',
    doctorName:'',
    prescriptionFile: null,

  });


  const [validationErrors, setValidationErrors] = useState({});


  const validateField = (name, value) => {
  
    let error = '';
    if (!value.trim()) {
      error = 'This field is required.';
    } else if (name === 'hospitalName' && !value.match(/^[a-zA-Z\s]+$/)) {
      error = 'Hospital name can only contain letters and spaces.';
    }
   
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));

    const error = validateField(name, value);
    setValidationErrors((validationErrors) => ({
      ...validationErrors,
      [name]: error,
    }));

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
        hospitalName:'',
        hospitalAddress:'',
        currentState: '',
        currentCity: '',
        currentPincode: '',
        doctorName:'',
      });

      
      
    } catch (error) {
         toast.error('Error submitting form. Please try again.');
      console.error('Error submitting form:', error);
    }
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((formData) => ({
      ...formData,
      prescriptionFile: file,
    }));
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



  return (

    <>
      <div>
        <div className="home-donor-form">
          <section className="form-donor">
            <div className='form-center col-md-7'>
              <div className=" overflow-x-hidden">
                <h1 className="h4 fs-2 text-danger text-center pb-4">Hospital Details</h1>
                <form className='overflow-hidden' id="myForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12 px-3">
                      <label htmlFor="validationDefault01" className="form-label">Hospital Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        name="hospitalName"
                            value={formData.hospitalName}
                            onChange={handleChange}
                            onKeyDown={handleKeyDownName}
                        disabled={formData.hospitalName.match(/[^a-zA-Z\s]/)}
                        required
                      />
                      {validationErrors.hospitalName && <div className="invalid-feedback">{validationErrors.hospitalName}</div>}
                    </div>

                  </div>
                  <div className="row pt-3">
                    <div className="col-md-12 px-3">
                      <label htmlFor="validationDefault01" className="form-label">Hospital Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        name="hospitalAddress"
                            value={formData.hospitalAddress}
                            onChange={handleChange}
                        required
                      />
                      {validationErrors.hospitalAddress && <div className="invalid-feedback">{validationErrors.hospitalAddress}</div>}
                    </div>

                  </div>


                  <div className="row py-3">
                    <div className="col-md-6 col-lg-4">
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
                    <div className="col-md-6 col-lg-4  mt-3 mt-md-0">
                      <label htmlFor="validationDefault04" className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationPincode"
                        name='currentCity'
                      value={formData.currentCity}
                      onChange={handleChange}
          
                      required
                      />
                      {validationErrors.currentCity && <div className="invalid-feedback">{validationErrors.currentCity}</div>}
                    </div>
                    <div className="col-md-12 col-lg-4 mt-3 mt-md-3 mt-lg-0">
                      <label htmlFor="validationPincode" className="form-label">Pincode</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationPincode"
                        name='currentPincode'
                      value={formData.currentPincode}
                      onChange={handleChange}
                      required
                      />
                      {validationErrors.currentPincode  && <div className="invalid-feedback">{validationErrors.currentPincode}</div>}
                    </div>
                  </div>


                  <div className="row">
                    <div className=" col-md-12 col-lg-7 px-3">
                      <label htmlFor="validationDefault01" className="form-label">Doctor Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        placeholder="Full Name"
                        name="doctorName"
                            value={formData.doctorName}
                            onChange={handleChange}
                            onKeyDown={handleKeyDownName}
                        disabled={formData.doctorName.match(/[^a-zA-Z\s]/)}
                        required
                      />
                      {validationErrors.doctorName && <div className="invalid-feedback">{validationErrors.doctorName}</div>}
                    </div>


                    <div className="col-md-12 col-lg-5 px-3 mt-3 mt-md-3 mt-lg-0">
                      <label htmlFor="validationDefault01" className="form-label w-100">Doctor Prescription</label>
                      
                      <input type="file" name="upload" placeholder='Upload File' id="formIdentificationProof"   accept=".png, .jpeg, .jpg"
          onChange={handleFileChange} />
                    </div>
                  </div>


                  <div className="row mt-3">
                    <div className="col">
                      <span className='' style={{padding: '15px'}}>I am a</span>


                      <div class="btn-group " role="group">
                        <Link to="/patient">
                          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                          <label class="btn btn-outline-secondary" for="btnradio1">Patient</label>
                        </Link>

                        <Link to="/receiver">
                          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                          <label class="btn btn-outline-secondary" for="btnradio2">Receiver</label>
                        </Link>
                      </div>

                    </div>
                  </div>

          


                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Hospital
