import React from 'react';
import Navbar from '../../Component/Navbar';
import '../../App.css';

const Page2 = ({ data, onChange, onNext, onPrev, errors }) => {
    return (
        <>
            <Navbar />
            <body className='overflow-hidden form-bg mt-5'>
                <div className='body-color'>
                    <div className="container overflow-x-hidden">
                        <h1 className="my-5 h1 fs-2 fw-bold">Blood Donation Registration Form</h1>
                        <form className='overflow-hidden'>
                            <div className="row g-5">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom03">Current Address</label>
                                    <input type="text" className={`form-control ${errors.CurrentAddress ? 'is-invalid' : ''}`} id="validationCustom03" value={data.CurrentAddress} onChange={(e) => onChange('CurrentAddress', e.target.value)} required />
                                    {errors.CurrentAddress && <div className="invalid-feedback">{errors.CurrentAddress}</div>}
                                    <div className="row pt-3">
                                        <div className="col-md-5">
                                            <label htmlFor="stateDropdown" className="form-label">State:</label>
                                            <select className='form-select' id="stateDropdown" value={data.CurrentState} onChange={(e) => onChange('CurrentState', e.target.value)}>
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
                                            <input type="text" className={`form-control ${errors.CurrentCity ? 'is-invalid' : ''}`} id="validationPincode" value={data.CurrentCity} onChange={(e) => onChange('CurrentCity', e.target.value)} required />
                                            {errors.CurrentCity && <div className="invalid-feedback">{errors.CurrentCity}</div>}
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="validationPincode" className="form-label">Pincode</label>
                                            <input type="pincode" className={`form-control ${errors.CurrentPincode ? 'is-invalid' : ''}`} id="validationPincode" value={data.CurrentPincode} onChange={(e) => onChange('CurrentPincode', e.target.value)} required />
                                            {errors.CurrentPincode && <div className="invalid-feedback">{errors.CurrentPincode}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationCustom03">Permanent Address</label>
                                    <input type="text" className={`form-control ${errors.PermanentAddress ? 'is-invalid' : ''}`} id="validationCustom03" value={data.PermanentAddress} onChange={(e) => onChange('PermanentAddress', e.target.value)} required />
                                    {errors.PermanentAddress && <div className="invalid-feedback">{errors.PermanentAddress}</div>}
                                    <div className="row pt-3">
                                        <div className="col-md-5">
                                            <label htmlFor="stateDropdown" className="form-label">State:</label>
                                            <select className='form-select' id="stateDropdown" value={data.PermanentState} onChange={(e) => onChange('PermanentState', e.target.value)}>
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
                                            <input type="text" className={`form-control ${errors.PermanentCity ? 'is-invalid' : ''}`} id="validationPincode" value={data.PermanentCity} onChange={(e) => onChange('PermanentCity', e.target.value)} required />
                                            {errors.PermanentCity && <div className="invalid-feedback">{errors.PermanentCity}</div>}
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="validationPincode" className="form-label">Pincode</label>
                                            <input type="pincode" className={`form-control ${errors.PermanentPincode ? 'is-invalid' : ''}`} id="validationPincode" value={data.PermanentPincode} onChange={(e) => onChange('PermanentPincode', e.target.value)} required />
                                            {errors.PermanentPincode && <div className="invalid-feedback">{errors.PermanentPincode}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-md-2">
                                    <label htmlFor="validationDefault04" className="form-label">Blood Group</label>
                                    <select className={`form-select ${errors.BloodGrp ? 'is-invalid' : ''}`} id="validationDefault04" value={data.BloodGrp} onChange={(e) => onChange('BloodGrp', e.target.value)} required>
                                        <option value="" disabled>Select blood group</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                    {errors.BloodGrp && <div className="invalid-feedback">{errors.BloodGrp}</div>}
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Last Donation Date</label>
                                    <input type="date" className={`form-control ${errors.DonationDate ? 'is-invalid' : ''}`} id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" value={data.DonationDate} onChange={(e) => onChange('DonationDate', e.target.value)} required />
                                    {errors.DonationDate && <div className="invalid-feedback">{errors.DonationDate}</div>}
                                </div>
                            </div>
                            <div className="row pt-2">
  <div className="col-md-5 mt-2">
    <p>In the last six months, have you had any of the following?</p>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        id="inlineRadio1"
        name="lastSixMonths"
        checked={data.Six === 'Tattooing'}
        onChange={() => onChange('Six', 'Tattooing')}
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
        name="lastSixMonths"
        checked={data.Six === 'Piercing'}
        onChange={() => onChange('Six', 'Piercing')}
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
        name="lastSixMonths"
        checked={data.Six === 'Other'}
        onChange={() => onChange('Six', 'Other')}
      />
      <label className="form-check-label" htmlFor="inlineRadio3">
        Other
      </label>
    </div>
  </div>
  <div className="col-md-4">
    <p>Do you consume Alcohol/Drugs?</p>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        id="inlineRadio4"
        name="consume"
        checked={data.Consume === 'Yes'}
        onChange={() => onChange('Consume', 'Yes')}
      />
      <label className="form-check-label" htmlFor="inlineRadio4">
        Yes
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        id="inlineRadio5"
        name="consume"
        checked={data.Consume === 'No'}
        onChange={() => onChange('Consume', 'No')}
      />
      <label className="form-check-label" htmlFor="inlineRadio5">
        No
      </label>
    </div>
  </div>
</div>

                            <div className="row pt-2 mt-3">
                                <div className="col-md-6">
                                    <div className="form-group shadow-textarea">
                                        <label htmlFor="exampleFormControlTextarea6">Your medical history if any?</label>
                                        <textarea className={`form-control mt-2 ${errors.msg ? 'is-invalid' : ''}`} id="exampleFormControlTextarea6" rows="2" placeholder="Sugar, Hemoglobin, BP, Cancer" value={data.msg} onChange={(e) => onChange('msg', e.target.value)}></textarea>
                                        {errors.msg && <div className="invalid-feedback">{errors.msg}</div>}
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-secondary mt-4" onClick={onPrev}>Previous</button>
                            <button type="button" className="btn btn-secondary mt-4 mx-4" onClick={onNext}>Submit</button>
                        </form>
                    </div>
                    <div className="text-center p-4 footer"></div>
                </div>
            </body>
        </>
    );
}

export default Page2;

