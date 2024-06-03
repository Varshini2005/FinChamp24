import React from 'react'
import '../PageStyles/EntryPage.css'
import loginPic from '../assets/loginPic.jpg'
import { Link } from 'react-router-dom';

const EntryPage = () => {
  return (
    <div className='entry'>
    <img src={loginPic} alt="loginPic" className="loginPic"/>
    <div className="entryText">
    <h1>FinChamp</h1>
    <h3>Financial Literacy made easy.</h3>
    <div className="btn-box">
    <Link to="/signup" className='signup-btn' style={{ textDecoration: 'none' }}>Sign Up</Link>
    <Link to="/login" className='login-btn' style={{ textDecoration: 'none' }}>Login</Link>
    </div>
    </div>
    </div>
  )
}

export default EntryPage
