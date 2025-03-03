"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { GlobeIcon, CreditCardIcon, ShareIcon, SmartphoneIcon, ShirtIcon, PackageIcon, PencilIcon, TagIcon } from 'lucide-react';


const items = [
  { title: "Website", description: "Stunning logo to stand out from your competition and get people clicking.", icon: GlobeIcon },
  { title: "Business cards", description: "Grow your business and establish new connections with creative business cards.", icon: CreditCardIcon },
  { title: "Social media", description: "An eye-catching logo that helps you get more likes.", icon: ShareIcon },
  { title: "App", description: "A logo ready to put your app on the map and boost downloads.", icon: SmartphoneIcon },
  { title: "T-shirt", description: "A standout logo for your t-shirt to truly wear your brand.", icon: ShirtIcon },
  { title: "Packaging", description: "Enhance your business with memorable packaging.", icon: PackageIcon },
  { title: "Stationery", description: "From pens to letterheads, professional logos for all needs.", icon: PencilIcon },
  { title: "Sticker", description: "A logo design that sticks, perfect for laptops and branding.", icon: TagIcon }
];

const faqData = [
  {
    question: "Do you have any monthly plans or additional fees?",
    answer:
      "No! With our one-time single payment, you receive all logo files and lifetime access for unlimited edits and re-downloads.",
  },
  {
    question: "What package do I get after the purchase?",
    answer:
      "You will receive all the standard logo files that real-world designers usually send, including sliced logos for different uses (website, app, email signature, letterhead, etc.), production-ready source files for printing, commercial licensing, colors, and font names.",
  },
  {
    question: "Do you use templates?",
    answer:
      "NO, we don't use 'logo templates'; however, we use machine learning to generate unique designs based on a curated collection of fonts, colors, and layouts.",
  },
  {
    question: "Do I own my logo copyrights?",
    answer: "YES, you receive all copyrights to your logo after the purchase.",
  },
  {
    question: "What are you going to do next?",
    answer:
      "We are continually evolving and focusing on delivering an outstanding product for people worldwide instead of spending on fancy offices or PR.",
  },
];


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
        <Link href={'/create?title=' + logoTitle}>
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

      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get complete branding package</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          When finished making your logo, you can instantly download all logo assets including different colors
          (including black/white versions) and sizes ready to be used on various platforms such as social networks, email,
          and web. We also provide files for printing so you can get business cards or t-shirts for your new venture!
        </p>
        <div className="flex justify-center space-x-4 mb-8 text-blue-600 font-medium">
          <span>✔ 30+ branding assets</span>
          <span>✔ Unlimited edits & downloads</span>
          <span>✔ 24/7 instant file access</span>
        </div>
        <div className="flex justify-center mb-10">
          <img src="/branding-package.png" alt="Branding Package" className="max-w-4xl w-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-2">
                <item.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">FAQ</h2>
      <div className="space-y-6 text-left">
        {faqData.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold">Ready to make your own perfect logo?</h3>
        <p className="text-gray-500 mb-6">It's fast & fun with LogoGeny - world's easiest AI-powered logo maker</p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600">
          START CREATING
        </button>
      </div>
    </section>


    <footer className="bg-[#1E2A38] text-gray-300 pt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
        {/* Main Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">MAIN</h3>
          <ul className="space-y-2">
            {["Home", "Pricing", "How it works", "About", "Contact us"].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Logo Style Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">LOGO STYLE</h3>
          <ul className="space-y-2">
            {["Abstract logos", "A-Z Letter logos", "Gradient logos", "Icon logos", "Text logos"].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">RESOURCES</h3>
          <ul className="space-y-2">
            {["Logo design inspiration", "Company name generator", "API", "Profile Picture Maker"].map((item) => (
              <li key={item} className="hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">SUPPORT</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">support@logopony.com</li>
            <li className="hover:text-white cursor-pointer">Support working hours:</li>
            <li className="hover:text-white cursor-pointer">Monday-Friday: 9:00 - 21:00</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-600">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm py-6 space-y-2">
          <p>
            English · Deutsch · Nederlands · Español · Français · Italiano · Svensk · Österreich · Schweiz
          </p>
          <p>
            Logopony OÜ, 6 Sepapaja, 15551 Tallinn, Estonia, Company no: 14309787, VAT no: EE101995894
          </p>
          <p>©2016-2024 Logopony.com All rights reserved. Made in Europe</p>
          <p className="hover:text-white cursor-pointer">Privacy Policy - Terms</p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Hero;
