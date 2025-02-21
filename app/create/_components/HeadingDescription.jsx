import React from 'react';

function HeadingDescription({ title, description }) {
  return (
    <div>
      <h1 className='font-bold text-4xl text-orange-400'>{title}</h1>
      <p className='text-xl text-red-200 mt-2'>{description}</p>
    </div>
  );
}

export default HeadingDescription;
