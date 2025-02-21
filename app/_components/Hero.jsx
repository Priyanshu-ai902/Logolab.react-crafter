"use client"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState } from 'react';


const Hero = () => {
  const [logoTitle, setLogoTitle] = useState();

  return (

    <div className="text-center py-36 px-10 text-black">
      <h2 className="text-pink-600 text-xl font-semibold mb-4">AI Logo Maker</h2>
      <h1 className="text-3xl text-white md:text-5xl font-bold mb-6">
        Perfect Logos for Apps, Businesses, and Websites
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Craft unique and professional logos effortlessly with our AI-powered tool.
        Perfect for apps, businesses, websites, and more!
      </p>

      <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter your Logo Name"
          className="flex-1 p-3 rounded-lg border border-gray-300 "

          onChange={(event) => setLogoTitle(event?.target.value)}
        />
        <Link href={'/create?title='+logoTitle}>
          <Button className="bg-pink-600 hover:bg-pink-600 text-white px-6 py-3 rounded-lg">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
