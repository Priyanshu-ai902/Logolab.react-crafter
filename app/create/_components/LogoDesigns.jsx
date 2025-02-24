"use client"

import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';
import LogoDesig from '@/app/_data/LogoDesig';
import Image from 'next/image';

function LogoDesigns({ onHandleImputChange, fromData }) {
  const title = "Choose Your Logo Style";
  const description = "Select the type of logo design that best represents your brands unique identity.";


  const [selectedOption, setSelectedOption] = useState(fromData?.design?.title);
  console.log(fromData)
  return (
    <div className='mt-10 text-white'>
      <HeadingDescription title={title} description={description} />

      <div className="grid grid-rows-2 md:grid-cols-3 gap-5 mt-5">
        {LogoDesig.map((design, index) => (
          <div key={index} onClick={() => {
            setSelectedOption(design.title);
            onHandleImputChange(design)
          }}
            className={`p-1 hover:border-2 border-white  cursor-pointer ${selectedOption == design.title && "border-2  border-white"}`}>
            <Image src={design.image} alt={design.title} width={200} height={100} className='w-full  text-white rounded-full' />
            <h1>{design.title}</h1>
          </div>

        ))}
        
      </div>
    </div>
  );
}

export default LogoDesigns;
