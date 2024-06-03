import React, { useState } from 'react';
import '../PageStyles/SignUpPage.css';
import loginPic from '../assets/loginPic.jpg';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm({
    mode: 'onChange',
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // Do something with the form data
  };

 
  
  

  const validateEmailOrPhoneNumber = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@(email\.com|gmail\.com)$/i;
    const phoneRegex = /^\d{7,15}$/;
    if (!(emailRegex.test(value) || phoneRegex.test(value))) {
      return 'Invalid email or phone number';
    }
    return true;
  };

  return (
    <div className='sign-up'>
      <img src={loginPic} alt="loginPic" className="loginPic" />

      <div className='signupText'>
        <h2 className="signup-title">
          Sign Up
        </h2>

        <div className="signup-form">
          <form className="signup-form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                placeholder='Name'
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                {...register('name', { required: 'Name is required' })}
                className="input-field name-input"
              />
             
            </div>
 {errors.name && <span className="error-message">{errors.name.message}</span>}
            <div className="form-group">
              <input
                placeholder='Username'
                id="username"
                name="username"
                type="text"
                autoComplete="off"
                {...register('username', { required: 'Username is required' })}
                className="input-field username-input"
              />
           
            </div>
   {errors.username && <span className="error-message">{errors.username.message}</span>}
            <div className="form-group">
              <input
                placeholder='Email/Phone Number'
                id="emailOrPhoneNumber"
                name="emailOrPhoneNumber"
                type="text"
                autoComplete="off"
                {...register('emailOrPhoneNumber', { required: 'Email or phone number is required', validate: validateEmailOrPhoneNumber })}
                className="input-field email-phone-input"
              />
          
              
            </div>
{errors.emailOrPhoneNumber && <span className="error-message">{errors.emailOrPhoneNumber.message}</span>}
            <div className="form-group">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder='Password'
                autoComplete="current-password"
                {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}
                className="input-field password-input"
              />
         
            
            </div>
  {errors.password && <span className="error-message">{errors.password.message}</span>}
            <div className="form-group">
              <label htmlFor="termsCheckbox" className="checkbox-label">
                <input
                  id="termsCheckbox"
                  name="termsCheckbox"
                  type="checkbox"
                  {...register('termsCheckbox', { required: 'Please accept the terms of service' })}
                />
                I agree to the terms of service
              </label>
             
            </div>
 {errors.termsCheckbox && <span className="error-message">{errors.termsCheckbox.message}</span>}
            <div className="form-group">
              <button
                type="submit"
                className="btn-signup"
                disabled={!isValid}
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="sign-up-option">
            Already have an account?   <Link to="/login"  style={{ textDecoration: 'none' }}>Login</Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignUpPage;
