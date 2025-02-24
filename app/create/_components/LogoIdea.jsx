import React, { useEffect, useState } from 'react'
import HeadingDescription from './HeadingDescription'
import axios from 'axios'
import { Loader2Icon } from 'lucide-react'
import Prompt from '@/app/_data/Prompt';

function LogoIdea({ fromData, onHandleImputChange }) {
  const title = "Choose Your Logo Style";
  const description = "Select the type of logo design that best represents your brands unique identity.";

  const [ideas, setIdeas] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(fromData?.idea || '');
  useEffect(() => {
    generateLogoDesignIdea();
  }, [])

  const generateLogoDesignIdea = async () => {
    try {
      setLoading(true);
      const PROMPT = Prompt.DESIGN_IDEA_PROMPT
        .replace('{logoType}', fromData?.design.title)
        .replace('{logoTitle}', fromData.title)
        .replace('{logoDesc}', fromData.desc)
        .replace('{logoPrompt}', fromData.design.prompt);

      const result = await axios.post('/api/ai-design-ideas', { prompt: PROMPT });

      console.log(result.data);
      !ideas && setIdeas(result.data.logo_ideas || []);
    } catch (error) {
      console.error('Error generating logo ideas:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='my-10'>
      <HeadingDescription
        title={title}
        description={description}
      />
      <div className='flex items-center justify-center'>
        {loading && <Loader2Icon className='animate-spin my-10' />}
      </div>
      <div className='flex flex-wrap gap-3 mt-6'>
        {ideas && ideas.map((item, index) => (
          <h2
            key={index}
            onClick={() => {
              setSelectedOption(item);
              onHandleImputChange(item);
            }}
            className={`p-2 rounded-full border px-3 cursor-pointer hover:border-primary ${selectedOption === item && 'border-primary'}`}
          >
            {item}
          </h2>
        ))}
        <h2
          onClick={() => {
            setSelectedOption('Let AI Select the best idea');
            onHandleImputChange('Let AI Select the best idea')
          }}
          className={`p-2 rounded-full border px-3 cursor-pointer
          hover:border-primary ${selectedOption == 'Let AI Select the best idea' && 'border-primary'}`}>Let AI Select the best idea</h2>
      </div>
    </div>

  )
}

export default LogoIdea