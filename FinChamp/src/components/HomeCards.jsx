import React from 'react';

import "../compoStyles/HomeCards.css";


const HomeCards = (props) => {
  return (
    <div className='HomeCards'>
      <img src={props.imageUrl} className='card-image'/>
      <div className='card-text'>
       <h2>{props.topic}</h2>
       <button>Learn More</button>
      </div>
    </div>
  )
}

export default HomeCards

