
import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';

function LogoDesc({onHandleImputChange, fromData}) {
  const title = " Describe Your Logo Vision";
  const description = "Share your ideas, themes , or inspirations to create a logo that perfectly represents your brand or project.";

  

  return (
    <div className='mt-10 text-black'>
      <HeadingDescription title={title} description={description} />

      <input type="text" placeholder='Enter your Design Description'
      className='p-4 border border-green-400 rounded-lg mt-5 w-full'
      defaultValue={fromData?.desc}
   
      onChange={(e)=>onHandleImputChange(e.target.value)}/>
    </div>
  );
}

export default LogoDesc;
