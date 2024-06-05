import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../PageStyles/LoginPage.css';
import loginPic from '../assets/loginPic.jpg';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // Do something with the form data
  };

  const handleInputChange = () => {
    const emailValue = document.getElementById('emailOrPhoneNumber').value;
    const passwordValue = document.getElementById('password').value;
    setIsFormValid(emailValue.trim() !== '' && passwordValue.trim() !== '');
  };

  return (
    <div className='login'>
      <img src={loginPic} alt="loginPic" className="loginPic" />

      <div className='loginText'>
        <h2 className="logintitle">
          Login
        </h2>

        <div className="login-form">
          <form className="signin-form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="emailOrPhoneNumber" className="form-label">
                
                <input
                  placeholder='Email/Phone Number'
                  id="emailOrPhoneNumber"
                  name="emailOrPhoneNumber"
                  type="text"
                  autoComplete="off"
                  {...register('emailOrPhoneNumber', { required: 'Email or phone number is required' })}
                  className="input-field"
                  onChange={handleInputChange}
                />
              </label>
              
            </div>
{errors.emailOrPhoneNumber && <span className="error-message">{errors.emailOrPhoneNumber.message}</span>}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
        
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Password'
                  autoComplete="current-password"
                  {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}
                  className="input-field"
                  onChange={handleInputChange}
                />
              </label>
             
            </div>
 {errors.password && <span className="error-message">{errors.password.message}</span>}
            <div className="form-group">
              <button
                type="submit"
                className="btn-login"
                disabled={!isFormValid}
              >
              Login
              </button>        <span className='password-reset'>Forgot Password?</span>
            </div>
    
          </form>

          <div className="sign-up-option">
            Don't have an account?  <Link to="/signup"  style={{ textDecoration: 'none' }}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
