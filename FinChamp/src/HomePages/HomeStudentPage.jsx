import React from 'react';
import '../HomePageStyles/HomeStudentPage.css'
import { BrowserRouter } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "../components/NavBar"
import LearnMoreCard from '../components/LearnMoreCard';

import FinanceTopics from '../components/FinanceTopics';
import Footer from '../components/Footer';


const HomeStudentPage = () => {
  return (
    <div className='home-student'>

      
      <NavBar />
     
      {/* <Footer /> */}
   
  
    {/* <NavBar/> */}
      <div className='home-news'>

      </div>
      <div className='home-cards'>
<FinanceTopics/>
      </div>
      <div className='student-loan'>
      <LearnMoreCard
        title="Smart Financing for Students"
        description="Discover student loan options tailored to your needs. Our loans offer competitive rates, flexible terms, and easy application processes to help you focus on your studies, not your finances."
      />
      </div>
      <div className='blogs'>

      </div>
      
      <Footer />  

    </div>
  )
}

export default HomeStudentPage
