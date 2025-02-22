"use client"

import React, { useState } from 'react';
import HeadingDescription from './HeadingDescription';
import { useSearchParams } from 'next/navigation';
import Colors from '@/app/_data/Colors';

function LogoColorPallete({ onHandleImputChange,fromData }) {
  const title = "Choose Your Color Palette";
  const description = "Pick the colors that reflect your brands personality and create a lasting impression.";

  const searchParam = useSearchParams();
  const [titles, setTitles] = useState(searchParam?.get('title') ?? '');


  const [selectedOption, setSelectedOption] = useState(fromData?.palette);

  return (
    <div className='mt-10 text-black'>
      <HeadingDescription title={title} description={description} />

      <div className="grid grid-rows-2 md:grid-cols-3 gap-5 mt-5 ">
        {Colors.map((palette, index) => (
          <div className={`flex p-1 cursor-pointer ${selectedOption == palette.name && 'border-2 rounded-lg border-white'}`} key={index}>
            {palette?.colors.map((color, index) => (
              <div className="h-24 w-full"
                key={index}
                onClick={() => {
                  setSelectedOption(palette.name);
                  onHandleImputChange(palette.name)
                }}
                style={{
                  backgroundColor: color
                }}>

              </div>
            ))}

          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoColorPallete;
