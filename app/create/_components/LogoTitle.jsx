"use client"

import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';
import { useSearchParams } from 'next/navigation';

function LogoTitle({onHandleImputChange , fromData}) {
  const title = "Logo Title";
  const description = "Add Your Business, App, or Website Name for a Custom Logo";

  const searchParam = useSearchParams();
  const [titles,setTitles]=useState(searchParam?.get('title')??'')

  return (
    <div className='mt-10 text-black'>
      <HeadingDescription title={title} description={description} />

      <input type="text" placeholder='Enter your logo name'
      className='p-4 border border-green-400 rounded-lg mt-5 w-full'
      defaultValue={fromData?.titles && titles}
      onChange={(e)=>onHandleImputChange(e.target.value)}/> 
    </div>
  );
}

export default LogoTitle;
