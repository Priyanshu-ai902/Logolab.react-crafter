'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function SideNav() {
  const pathParam = useSearchParams();
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption(pathParam.get('select'));
  }, [pathParam]);

  return (
    <div className=" shadow-sm h-screen flex flex-col  p-4">
      <Link
        href={'/editor?select=icon'}
        className={`p-3 text-lg px-7  text-gray-200 hover:bg-primary hover:text-white cursor-pointer my-2 rounded-full
        ${selectedOption === 'icon' ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white' : ''}
        `}
      >
        Icon
      </Link>

      <Link
        href={'/editor?select=background'}
        className={`p-3 text-lg px-7 text-gray-200 hover:bg-primary hover:text-white cursor-pointer my-2 rounded-full
        ${selectedOption === 'background' ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white' : ''}
        `}
      >
        Background
      </Link>
    </div>
  );
}

export default SideNav;
