import React from 'react';
import '../HomePageStyles/HomeProfPage.css'
import { BrowserRouter } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "../components/NavBar"
import LearnMoreCard from '../components/LearnMoreCard';

import FinanceTopics from '../components/FinanceTopics';
import Footer from '../components/Footer';


const HomeRetireePage = () => {
  return (
    <div className='home-retiree'>

      
      <NavBar />
     
      {/* <Footer /> */}
   

    {/* <NavBar/> */}
      <div className='home-news'>

      </div>
      <div className='home-cards'>
<FinanceTopics/>
      </div>
      <div className='retiree-loan'>
      <LearnMoreCard
  title="Securing Your Retirement"
  description="Discover a range of retirement opportunities crafted to help you plan for a secure future. From retirement savings plans with competitive returns to expert financial advice, we offer the resources you need to ensure a comfortable and worry-free retirement."
/>


      </div>
      <div className='retiree-blogs'>

      </div>
    
      <Footer />  

    </div>
  )
}

export default HomeRetireePage
