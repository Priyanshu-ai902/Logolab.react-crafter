"use client"

import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';
import { useSearchParams } from 'next/navigation';

function LogoDesc({onHandleImputChange}) {
  const title = " Describe Your Logo Vision";
  const description = "Share your ideas, themes , or inspirations to create a logo that perfectly represents your brand or project.";

  const searchParam = useSearchParams();
  const [titles,setTitles]=useState(searchParam?.get('title')??'')

  return (
    <div className='mt-10 text-black'>
      <HeadingDescription title={title} description={description} />

      <input type="text" placeholder='Enter your Design Description'
      className='p-4 border border-green-400 rounded-lg mt-5 w-full'
      
      onChange={(e)=>onHandleImputChange(e.target.value)}/>
    </div>
  );
}

export default LogoDesc;
