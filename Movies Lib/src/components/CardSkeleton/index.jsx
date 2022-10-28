import React from 'react';

import './style.css'

function CardSkeleton() {
  return (
    <div className='card-skeleton'>
      <div className="img-skeleton" />

      <span className='date-skeleton' />

      <span className='date-skeleton' />
    </div>
  );
}

export default CardSkeleton;