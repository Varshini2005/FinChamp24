import React from 'react';
import "../compoStyles/LearnMoreCard.css"




const LearnMoreCard = (props) => {


    const handleLearnMoreClick = () => {
      console.log('Learn More button clicked!');
    }
    
  return (

     <div className="learn-more-card">
      <h2 className="card-title">{props.title}</h2>
      <p className="card-description">{props.description}</p>
      <button className="learn-more-button" onClick={handleLearnMoreClick}>
        Learn More
      </button>
    </div>

  )
}

export default LearnMoreCard
