import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import EntryPage from './Pages/EntryPage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<EntryPage />} />
      </Routes>
    </Router>
  );
}


export default App
