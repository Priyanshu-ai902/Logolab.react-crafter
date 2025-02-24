"use client";

import React, { useEffect, useState } from "react";
import Prompt from "../_data/Prompt";
import axios from "axios";
import Image from "next/image";

function GenerateLogo() {
  const [fromData, setFromData] = useState(null);
  const [loading,setLoading]=useState(false)
  const [logoImage,setLogoImage]=useState()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("fromData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setFromData(parsedData);
        console.log("generate logo-data:", parsedData);
      } else {
        console.log("No data found in localStorage.");
      }
    }
  }, []);

  useEffect(() => {
    if (fromData?.titles) {
      GenerateAILogo();
    }
  }, [fromData]);

  const GenerateAILogo = async() => {
    setLoading(true)
    const PROMPT = Prompt.LOGO_PROMPT
      .replace("{logoTitle}", fromData?.titles)
      .replace("{logoDesc}", fromData?.desc)
      .replace("{logoColor}", fromData?.palette)
      .replace("{logoIdea}", fromData?.idea)
      .replace("{logoDesign}", fromData?.design?.title)
      .replace("{logoPrompt}", fromData?.design?.prompt);

    console.log("Generated Prompt:", PROMPT);

    const result = await axios.post('/api/ai-logo-model',{
      prompt:PROMPT
    })
    console.log(result?.data)
    setLogoImage(result.data?.image)
    setLoading(false)
  }; 

  return (
    <div className="bg-black text-white">
      <h2>{loading&&'Loading...'}</h2>
      {!loading&&<Image src={logoImage} alt='logo' width={200} height={200}/>}
    </div>
  );
}

export default GenerateLogo;
