import React from 'react';
import './Card.css';

const Card = props => {
  // we can add { name email id } instead of props here and don't use 'props.'
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='avatar' src={`https://robohash.org/${props.id}?size=200x200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
