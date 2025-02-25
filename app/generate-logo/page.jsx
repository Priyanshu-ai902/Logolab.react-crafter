"use client";

import React, { useEffect, useState } from "react";
import Prompt from "../_data/Prompt";
import axios from "axios";
import Image from "next/image";

function GenerateLogo() {
  const [fromData, setFromData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logoImage, setLogoImage] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("fromData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setFromData(parsedData);
      }
    }
  }, []);

  useEffect(() => {
    if (fromData?.titles) {
      GenerateAILogo();
    }
  }, [fromData]);

  const GenerateAILogo = async () => {
    setLoading(true);
    const PROMPT = Prompt.LOGO_PROMPT
      .replace("{logoTitle}", fromData?.titles)
      .replace("{logoDesc}", fromData?.desc)
      .replace("{logoColor}", fromData?.palette)
      .replace("{logoIdea}", fromData?.idea)
      .replace("{logoDesign}", fromData?.design?.title)
      .replace("{logoPrompt}", fromData?.design?.prompt);

    const result = await axios.post("/api/ai-logo-model", {
      prompt: PROMPT,
    });
    setLogoImage(result.data?.image);
    setLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = logoImage;
    link.download = "GeneratedLogo.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">{loading ? "Generating Logo..." : "Your Generated Logo"}</h2>
      {!loading && logoImage && (
        <div className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-2xl shadow-lg">
          <Image src={logoImage} alt="Generated Logo" width={300} height={300} className="rounded-xl" />
          <button
            onClick={handleDownload}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Download Logo
          </button>
        </div>
      )}
    </div>
  );
}

export default GenerateLogo;
