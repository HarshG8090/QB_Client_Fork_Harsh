import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {useNavigate} from 'react-router-dom';

const Patient = () => {

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientName: '',
    aadharCardNo: '',
    mobileNo: '',
    bloodGrp: '',
    requiredUnits: '',
    reasonForBlood: '',
    donationDate: '',
    donationTime: '',
    guardianName: '',
    guardianContactNo: '',
    relationWithPatient: '',

  });


  const [validationErrors, setvalidationErrors] = useState({});


  const validateField = (name, value) => {
   
    if (name === 'hospitalName' && !value.match(/^[a-zA-Z\s]+$/)) {
      return 'Hospital name can only contain letters and spaces.';
    }
   
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));

   
    setvalidationErrors((validationvalidationErrors) => ({
      ...validationvalidationErrors,
      [name]: '',
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
      setvalidationErrors(errors);
      console.log('Form validation failed');
      return;
    }


    try {

      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      toast.success('Form submitted successfully!');
      console.log('Form submitted successfully!');
      console.log(response.data);
      setFormData({
        patientName: '',
        aadharCardNo: '',
        mobileNo: '',
        bloodGrp: '',
        requiredUnits: '',
        reasonForBlood: '',
        donationDate: '',
        donationTime: '',
        guardianName: '',
        guardianContactNo: '',
        relationWithPatient: '',
      });

    
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (error) {
      toast.error('Error submitting form. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

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
      <div>
        <div className="home-donor-form">
          <section className="form-donor">
            <div className='form-center col-md-7'>
              <div className=" overflow-x-hidden">
                <h1 className="h4 fs-2 text-danger text-center ">Patient Details</h1>
                <form className='overflow-hidden' id="myForm" onSubmit={handleSubmit}>
                  <div className="row mt-5">
                    <div className="col-md-6 col-lg-4 px-3">
                      <label htmlFor="validationDefault01" className="form-label">Patient Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleChange}
                        onKeyDown={handleKeyDownName}
                        disabled={formData.patientName.match(/[^a-zA-Z\s]/)}
                        required
                      />
                      {validationErrors.patientName && <div className="invalid-feedback">{validationErrors.patientName}</div>}
                    </div>


                    <div className="col-md-6 col-lg-4 px-3 mt-3 mt-md-0">
                      <label htmlFor="validationDefault01" className="form-label">Aadhar Card No</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        name="aadharCardNo"
                        value={formData.aadharCardNo}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        required
                      />
                      {validationErrors.aadharCardNo && <div className="invalid-feedback">{validationErrors.aadharCardNo}</div>}
                    </div>


                    <div className="col-md-12 col-lg-4 mt-4">
                      <input type="file" name="upload" className="form-control " />
                    </div>

                  </div>


                  <div className="row mt-3 ">
                    <div className="col-md-6 col-lg-4">
                      <label htmlFor="validationDefault01" className="form-label">Mobile Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="validationDefault01"
                        placeholder='+91'
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        required
                      />
                      {validationErrors.mobileNo && <div className="invalid-feedback">{validationErrors.mobileNo}</div>}
                    </div>


                    <div className="col-md-6 col-lg-4 mt-3 mt-md-0">
                      <label htmlFor="validationDefault01" className="form-label">Blood Group</label>
                      <select
                        className="form-select"
                        placeholder='AB+'
                        id="validationDefault01"
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


                    <div className="col-md-12 col-lg-4 mt-3 mt-md-3 mt-lg-0  ">
                      <label htmlFor="validationDefault01" className="form-label">Required Units</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        name="requiredUnits"
                        value={formData.requiredUnits}
                        onChange={handleChange}
                        required
                      />
                      {validationErrors.requiredUnits && <div className="invalid-feedback">{validationErrors.requiredUnits}</div>}
                    </div>


                  </div>


                  <div className="row mt-3">
                    <div className="col-md-12 col-lg-4">
                      <label htmlFor="validationDefault01" className="form-label">Reason for Blood</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        name="reasonForBlood"
                        value={formData.reasonForBlood}
                        onChange={handleChange}
                        required
                      />
                      {validationErrors.reasonForBlood && <div className="invalid-feedback">{validationErrors.reasonForBlood}</div>}
                    </div>


                    <div className="col-md-6 col-lg-4 mt-3 mt-md-3 mt-lg-0 ">
                      <label htmlFor="validationDefault01" className="form-label">Donation Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="validationDefault01"
                        name="donationDate"
                        value={formData.donationDate}
                        onChange={handleChange}
                        required
                      />
                      {validationErrors.donationDate && <div className="invalid-feedback">{validationErrors.donationDate}</div>}
                    </div>


                    <div className="col-md-6 col-lg-4 mt-3 mt-md-3 mt-lg-0 ">
                      <label htmlFor="validationDefault01" className="form-label">Donation Time</label>
                      <input
                        type="time"
                        className="form-control"
                        id="validationDefault01"
                        name="donationTime"
                        value={formData.donationTime}
                        onChange={handleChange}
                        required
                      />
                      {validationErrors.donationTime && <div className="invalid-feedback">{validationErrors.donationTime}</div>}
                    </div>


                  </div>



                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="validationDefault01" className="form-label">Guardian Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        placeholder='Full Name'
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleChange}
                        onKeyDown={handleKeyDownName}
                        required
                      />
                      {validationErrors.guardianName && <div className="invalid-feedback">{validationErrors.guardianName}</div>}
                    </div>


                    <div className="col-md-6 mt-3 mt-md-0">
                      <label htmlFor="validationDefault01" className="form-label">Guardian Contact No</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="validationDefault01"
                        name="guardianContactNo"
                        value={formData.guardianContactNo}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        required
                      />
                      {validationErrors.guardianContactNo && <div className="invalid-feedback">{validationErrors.guardianContactNo}</div>}
                    </div>
                  </div>




                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label htmlFor="validationDefault01" className="form-label">Relation with Patient</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        name="relationWithPatient"
                        value={formData.relationWithPatient}
                        onChange={handleChange}
                        onKeyDown={handleKeyDownName}
                        required
                      />
                      {validationErrors.relationWithPatient && <div className="invalid-feedback">{validationErrors.relationWithPatient}</div>}
                    </div>


                    <div className="col-md-4 mt-3 mt-md-0">
                      <label htmlFor="validationDefault01" className="form-label w-100">Upload your Photo</label>
                      <input type="file" name="upload" placeholder='Upload File' />
                    </div>
                  </div>


                  <div className="text-center">
                    <button type="submit" className="btn btn-secondary mt-4">Submit</button>
                  </div>

                </form>
                <ToastContainer />
              </div>
            </div>
          </section>
        </div>
      </div>


    </>
  )
}

export default Patient
