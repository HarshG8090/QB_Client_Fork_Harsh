import React from 'react';
import Navbar from '../../Component/Navbar';
import '../../App.css';

const Page1 = ({ data, onChange, onNext, errors }) => {
  return (
    <>
      <Navbar />
      <body className='overflow-hidden form-bg mt-5'>
        <div className='body-color'>
          <div className="container overflow-x-hidden">
            <h1 className="my-5 h1 fs-2 fw-bold">Blood Donation Registration Form</h1>
            <form className='overflow-hidden mb-5'>
              <div className="row">
                <div className="col-md-2">
                  <label htmlFor="validationDefault01" className="form-label">Name</label>
                  <input type="text" className={`form-control ${errors.fname ? 'is-invalid' : ''}`} id="validationDefault01" placeholder="First" value={data.fname} onChange={(e) => onChange('fname', e.target.value)} required />
                  {errors.fname && <div className="invalid-feedback">{errors.fname}</div>}
                </div>
                <div className="col-md-2">
                  <label htmlFor="validationDefault02" className="form-label"></label>
                  <input type="text" className={`form-control mt-2 ${errors.lname ? 'is-invalid' : ''}`} id="validationDefault02" placeholder="Last" value={data.lname} onChange={(e) => onChange('lname', e.target.value)} required />
                  {errors.lname && <div className="invalid-feedback">{errors.lname}</div>}
                </div>
                <div className="col-md-2">
                  <label htmlFor="validationDefault03" className="form-label">Contact</label>
                  <input type="tel" className={`form-control ${errors.Contact ? 'is-invalid' : ''}`} placeholder="+91" id="validationDefault03" value={data.Contact} onChange={(e) => onChange('Contact', e.target.value)} required />
                  {errors.Contact && <div className="invalid-feedback">{errors.Contact}</div>}
                </div>
                <div className="col-md-2">
                  <label htmlFor="validationDefault03" className="form-label">Alternate Contact</label>
                  <input type="tel" className={`form-control ${errors.Alternate_Contact ? 'is-invalid' : ''}`} placeholder="+91" id="validationDefault03" required value={data.Alternate_Contact} onChange={(e) => onChange('Alternate_Contact', e.target.value)} />
                  {errors.Alternate_Contact && <div className="invalid-feedback">{errors.Alternate_Contact}</div>}
                </div>
                <div className="col-md-2">
                  <label htmlFor="validationDefault05" className="form-label">Email ID</label>
                  <input type="email" className={`form-control ${errors.Email ? 'is-invalid' : ''}`} id="validationDefault05" required value={data.Email} onChange={(e) => onChange('Email', e.target.value)} />
                  {errors.Email && <div className="invalid-feedback">{errors.Email}</div>}
                </div>
              </div>
              <div className="row g-3 pt-3">
                <div className="col-md-2">
                  <label htmlFor="validationDefault01" className="form-label">Birth Date</label>
                  <input type="date" className={`form-control ${errors.Dob ? 'is-invalid' : ''}`} id="validationDefault01" required value={data.Dob} onChange={(e) => onChange('Dob', e.target.value)} />
                  {errors.Dob && <div className="invalid-feedback">{errors.Dob}</div>}
                </div>
                <div className="col-md-2">
                  <label htmlFor="validationDefault04" className="form-label">Gender</label>
                  <select className={`form-select ${errors.Gender ? 'is-invalid' : ''}`} id="validationDefault04" value={data.Gender} onChange={(e) => onChange('Gender', e.target.value)} required>
                    <option value="" disabled>Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.Gender && <div className="invalid-feedback">{errors.Gender}</div>}
                </div>
                <div className="col-md-2">
                  <label htmlFor="validationDefault05" className="form-label">Weight</label>
                  <input type="text" className={`form-control ${errors.Weight ? 'is-invalid' : ''}`} id="validationDefault05" required value={data.Weight} onChange={(e) => onChange('Weight', e.target.value)} />
                  {errors.Weight && <div className="invalid-feedback">{errors.Weight}</div>}
                </div>
              </div>
              <button type="button" className="btn btn-secondary mt-4" onClick={onNext}>Next</button>
            </form>
          </div>
          <div className="text-center p-4 footer"></div>
        </div>
      </body>
    </>
  );
}

export default Page1;
