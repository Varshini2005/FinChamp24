import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRegistration } from './RegistrationContext';
import "../PageStyles/TopicPage.css";
import loginPic from '../assets/loginPic.jpg';

const TopicPage = () => {
  const navigate = useNavigate();
  const { registrationData, updateRegistrationData } = useRegistration();
  const [selectedTopics, setSelectedTopics] = useState([]);

  // Extract category from location state
  const location = useLocation();
  const category = location.state ? location.state.category : '';

  const financialTopics = [
    "Stock Market", "Investing", "Personal Finance", "Budgeting",
    "Retirement Planning", "Real Estate", "Cryptocurrency",
    "Financial Planning", "Insurance", "Credit Cards", "Tax Planning",
    "Estate Planning", "Savings", "Debt Management", "Credit Scores",
    "Loans", "Student Finance", "Entrepreneurship", "Wealth Management",
    "Financial Literacy",
  ];

  const handleTopicClick = (topic) => {
    // Toggle selection of topics
    setSelectedTopics(prevSelectedTopics => {
      if (prevSelectedTopics.includes(topic)) {
        return prevSelectedTopics.filter(item => item !== topic);
      } else {
        return [...prevSelectedTopics, topic];
      }
    });
  };

  const handleSubmit = () => {
    // Update registration data with selected topics
    updateRegistrationData({ ...registrationData, selectedTopics, category });

    // Log all registration details in the console
    console.log('Final Registration Data:', { ...registrationData, selectedTopics, category });
  
    // Determine the homepage based on the category and navigate
    switch (category) {
      case 'Student':
        navigate('/home-student');
        break;
      case 'Working':
        navigate('/home-prof');
        break;
      case 'Retiree':
        navigate('/home-retiree');
        break;
      default:
        // Navigate to a default page if category is not recognized
        navigate('/');
    }
  };

  return (
    <div className='topic-page'>
      <img src={loginPic} alt="loginPic" className="loginPic" />
      <div className='topic-text'>
        <h2 className="topic-title">Select Topics</h2>
        <div className="topics-container">
          {financialTopics.map(topic => (
            <button
              key={topic}
              className={`topic-button ${selectedTopics.includes(topic) ? 'selected' : ''}`}
              onClick={() => handleTopicClick(topic)}
            >
              {topic}
            </button>
          ))}
        </div>
        <button
          className="topic-submit"
          onClick={handleSubmit}
          disabled={selectedTopics.length === 0}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TopicPage;
