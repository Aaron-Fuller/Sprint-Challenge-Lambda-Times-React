import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {cardData.map(cardFromMap => (
          <Card card={cardFromMap} key={cardFromMap.name} />
        ))
        }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;