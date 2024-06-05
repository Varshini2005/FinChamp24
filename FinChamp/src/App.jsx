import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RegistrationProvider } from './Pages/RegistrationContext';
import EntryPage from './Pages/EntryPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import OtpPage from './Pages/OtpPage';
import SelectionPage from './Pages/SelectionPage';
import TopicPage from './Pages/TopicPage';
import HomeStudentPage from "./HomePages/HomeStudentPage";
import HomeProfPage from "./HomePages/HomeProfPage";
import HomeRetireePage from "./HomePages/HomeRetireePage";

function App() {
  return (
    <RegistrationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/OTP" element={<OtpPage />} /> 
          <Route path="/select" element={<SelectionPage />} />
          <Route path="/topic" element={<TopicPage />} />
          <Route path="/home-student" element={<HomeStudentPage />} />
          <Route path="/home-prof" element={<HomeProfPage />} />
          <Route path="/home-retiree" element={<HomeRetireePage />} />
        </Routes>
      </Router>
    </RegistrationProvider>
  );
}

export default App;
