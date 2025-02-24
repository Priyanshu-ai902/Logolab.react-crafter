"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

function PricingModel({ fromData }) {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const router = useRouter();

  useEffect(() => {
    if (fromData && Object.keys(fromData).length > 0 && typeof window !== "undefined") {
      console.log("Saving this data to localStorage:", fromData);
      localStorage.setItem("fromData", JSON.stringify(fromData));
    }
  }, [fromData]);

  console.log("Data received in PricingModel:", fromData);

  const handleGenerateClick = async () => {
    if (user) {
      router.push("/generate-logo");
    } else {
      const signIn = await openSignIn();
      if (signIn) {
        router.push("/generate-logo");
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
        <div className="mb-4">
          <span className="inline-block bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            Your Logo is ready
          </span>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Free</h2>
        <ul className="text-gray-600 space-y-2 text-left">
          <li>• Generate unlimited logos for free</li>
          <li>• Longer wait times</li>
          <li>• Wait time: 30 seconds to 3 minutes</li>
          <li>• Limited Design Options and Quality</li>
        </ul>

        <Button
          className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white"
          onClick={handleGenerateClick}
        >
          Generate
        </Button>
      </div>
    </div>
  );
}

export default PricingModel;
