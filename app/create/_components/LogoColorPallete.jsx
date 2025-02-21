"use client"

import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';
import { useSearchParams } from 'next/navigation';
import Colors from '@/app/_data/Colors';

function LogoColorPallete({ onHandleImputChange }) {
  const title = "Choose Your Color Palette";
  const description = "Pick the colors that reflect your brands personality and create a lasting impression.";

  const searchParam = useSearchParams();
  const [titles, setTitles] = useState(searchParam?.get('title') ?? '')

  return (
    <div className='mt-10 text-black'>
      <HeadingDescription title={title} description={description} />

      <div className="grid grid-rows-2 md:grid-cols-3 gap-5 mt-5 ">
        {Colors.map((palette, index) => (
          <div className="flex" key={index}>
            {palette?.colors.map((color, index) => (
              <div className="h-24 w-full"
              key={index}
              style={{
                backgroundColor:color
              }}>

              </div>
            ))}

          </div>
        ))}
      </div>



      <input type="text" placeholder='Enter your Design Description'
        className='p-4 border border-green-400 rounded-lg mt-5 w-full'

        onChange={(e) => onHandleImputChange(e.target.value)} />
    </div>
  );
}

export default LogoColorPallete;
