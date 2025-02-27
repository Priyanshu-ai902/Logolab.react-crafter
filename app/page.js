"use client";

import Hero from "./_components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <Hero />

      
      <Link href="/editor">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
          Go to Editor
        </button>
      </Link>
    </div>
  );
}
