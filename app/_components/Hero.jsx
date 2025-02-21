import { Button } from '@/components/ui/button';
import React from 'react';


const Hero = () => {
  return (
    <div className="text-center py-36 px-10 text-white">
      <h2 className="text-pink-600 text-xl font-semibold mb-4">AI Logo Maker</h2>
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
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
          className="flex-1 p-3 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <Button className="bg-pink-600 hover:bg-pink-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
