"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';
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


      <section className="bg-[#f8fbff] py-20 px-6 flex flex-col lg:flex-row items-center justify-between mt-12">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Make your own <br /> logo with AI
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Get 1000’s of custom logo designs with our AI generator. Instantly
          create designs for social media, business cards, and more!
        </p>
        <div className="mt-6 flex items-center bg-white p-2 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Enter your company name"
            className="w-full p-3 outline-none text-gray-800"
          />
          <span className="text-blue-500 text-xl pr-4 cursor-pointer">✎</span>
        </div>
        <button className="mt-6 w-full md:w-auto px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
          Generate Logos
        </button>
      </div>

      {/* Right Images */}
      <div className="lg:w-1/2 flex flex-wrap justify-center gap-4 mt-10 lg:mt-0">
        <Image src="/landing.png" alt="Logo on cup" width={150} height={200} />
        
      </div>
    </section>

    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <Image src="/images/feature1.png" alt="No design skills needed" width={300} height={200} />
          <h3 className="text-xl font-bold mt-4">No design skills needed</h3>
          <p className="text-gray-400 mt-2">
            Generate thousands of professional logo design ideas for free in seconds, choose the one you love.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <Image src="/images/feature2.png" alt="Fast, easy and fun" width={300} height={200} />
          <h3 className="text-xl font-bold mt-4">Fast, easy and fun</h3>
          <p className="text-gray-400 mt-2">
            Tweak any detail of your logo until it's perfect, this is easy and fun with our powerful logo editor.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <Image src="/images/feature3.png" alt="Ready-to-use logo files" width={300} height={200} />
          <h3 className="text-xl font-bold mt-4">Ready-to-use logo files</h3>
          <p className="text-gray-400 mt-2">
            Instantly receive 30+ logo files for web & print, social media branding, business cards, invoices, and more.
          </p>
        </div>
      </div>

      {/* AI Generation Info */}
      <div className="text-center max-w-4xl mx-auto mt-12 px-6">
        <Image src="/images/ai-generation.png" alt="AI Logo Generation" width={400} height={250} />
        <p className="text-gray-400 mt-4">
          We use <span className="text-blue-400">Artificial Intelligence</span> to generate thousands of logo ideas 
          from millions of possible combinations. With a sharp focus on timeless, minimal logo designs, we guarantee 
          that your new logo will last for ages.
        </p>
      </div>
    </section>
    </div>
  );
};

export default Hero;
