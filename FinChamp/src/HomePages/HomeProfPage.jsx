import React from 'react';
import '../HomePageStyles/HomeProfPage.css'
// import { BrowserRouter } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "../components/NavBar"
import LearnMoreCard from '../components/LearnMoreCard';

import FinanceTopics from '../components/FinanceTopics';
import Footer from '../components/Footer';


const HomeProfPage = () => {
  return (
    <div className='home-working'>
    {/* <BrowserRouter> */}
      
      <NavBar />
     
      {/* <Footer /> */}
   
  {/* </BrowserRouter> */}
    {/* <NavBar/> */}
      <div className='home-news'>

      </div>
      <div className='home-cards'>
<FinanceTopics/>
      </div>
      <div className='working-loan'>
      <LearnMoreCard
  title="Empowering Women in Finance"
  description="Explore financial opportunities designed to support and empower women. From loans with competitive rates to financial planning resources, we provide the tools you need to achieve your financial goals."
/>

      </div>
      <div className='working-blogs'>

      </div>
      {/* <BrowserRouter>    */}
      <Footer />  
    {/* </BrowserRouter> */}
    </div>
  )
}

export default HomeProfPage
