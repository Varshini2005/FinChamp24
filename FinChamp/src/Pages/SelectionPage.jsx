import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from './RegistrationContext';
import "../PageStyles/SelectionPage.css";
import loginPic from '../assets/loginPic.jpg';

const SelectionPage = () => {
  const navigate = useNavigate();
  const { updateRegistrationData } = useRegistration();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const countries = [
    { value: 'au', label: 'Australia' },
    { value: 'br', label: 'Brazil' },
    { value: 'ca', label: 'Canada' },
    { value: 'cn', label: 'China' },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'in', label: 'India' },
    { value: 'id', label: 'Indonesia' },
    { value: 'it', label: 'Italy' },
    { value: 'jp', label: 'Japan' },
    { value: 'mx', label: 'Mexico' },
    { value: 'ng', label: 'Nigeria' },
    { value: 'pk', label: 'Pakistan' },
    { value: 'ph', label: 'Philippines' },
    { value: 'ru', label: 'Russia' },
    { value: 'za', label: 'South Africa' },
    { value: 'kr', label: 'South Korea' },
    { value: 'es', label: 'Spain' },
    { value: 'gb', label: 'United Kingdom' },
    { value: 'us', label: 'United States' }
  ];

  const languages = [
    { value: 'ar', label: 'Arabic' },
    { value: 'zh', label: 'Chinese' },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'hi', label: 'Hindi' },
    { value: 'it', label: 'Italian' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'ru', label: 'Russian' },
    { value: 'es', label: 'Spanish' },
    { value: 'ta', label: 'Tamil' },
    { value: 'te', label: 'Telugu' },
    { value: 'tr', label: 'Turkish' },
    { value: 'ur', label: 'Urdu' },
    { value: 'vi', label: 'Vietnamese' }
  ];

 
  const handleSelection = () => {
    if (selectedCountry && selectedLanguage && selectedCategory) {
      updateRegistrationData({ selectedCountry, selectedLanguage, selectedCategory });
      setErrorMessage('');
    
      navigate('/topic', { state: { category: selectedCategory } });
    } else {
      setErrorMessage(' *Please select all the fields');
    }
  };
  return (
    <div className="selection-page">
      <img src={loginPic} alt="loginPic" className="loginPic" />
      <div className='selection-text'>
        <div>
          <h2 className="selection-title">Select Country</h2>
          <select
            id="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="dropdown"
          >
            <option value="">Select a country</option>
            {countries.map(country => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h2 className="selection-title">Select Language</h2>
          <select
            id="language"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="dropdown"
          >
            <option value="">Select a language</option>
            {languages.map(language => (
              <option key={language.value} value={language.value}>
                {language.label}
              </option>
            ))}
          </select>
        </div>
        <div className="btn-box">
          <h2 className="selection-title">Select Category</h2>
          <button onClick={() => setSelectedCategory('Student')} className="category-btn">Student</button>
          <button onClick={() => setSelectedCategory('Working')} className="category-btn">Working</button>
          <button onClick={() => setSelectedCategory('Retiree')} className="category-btn">Retiree</button>
        </div>
        <div className="error-message">{errorMessage}</div>
        <div className="btn-box">
          <button onClick={handleSelection} className='category-submit'>Next</button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
