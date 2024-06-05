import React, { useState } from 'react';
import '../PageStyles/OtpPage.css'; // Ensure this CSS file includes styles for the error message
import loginPic from '../assets/loginPic.jpg';
import { useForm } from 'react-hook-form';


const OtpPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isFormValid, setIsFormValid] = useState(false);

    const onSubmit = (data) => {
      console.log(data); 
    };

    const handleInputChange = () => {
        const otpValue = document.getElementById('otp').value;
        setIsFormValid(otpValue.trim() !== '');
    };

    return (
      <div className='otp-page'>
        <img src={loginPic} alt="loginPic" className="loginPic" />
        <div className='otpText'>
          <h2 className="otptitle">Enter OTP</h2>

          <div className="otp-form">
            <form className="otp-form-container" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="otp" className="form-label">
                  <input
                    placeholder="One Time Password"
                    id="otp"
                    name="otp"
                    type="text"
                    autoComplete="off"
                    {...register('otp', { required: 'OTP is required' })} // Registering input with validation rule
                    className="input-field"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              {errors.otp && <span className="error-message">{errors.otp.message}</span>}
           
              <div className="form-group">
                <button
                  type="submit"
                  className="btn-login"
                  disabled={!isFormValid} 
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="otp-resend">Didn't get OTP?<a href="" style={{marginLeft:"5px"}}>Resend OTP</a></div>
          </div>
        </div>
      </div>
    );
}

export default OtpPage;
;

