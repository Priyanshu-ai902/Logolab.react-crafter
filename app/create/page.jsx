"use client"

import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoColorPallete from './_components/LogoColorPallete'
import LogoDesigns from './_components/LogoDesigns'
import LogoIdea from './_components/LogoIdea'
import PricingModel from './_components/PricingModel'

const CreateLogo = () => {
    const [step, setStep] = useState(1)
    const [fromData, setFormData] = useState({})
    
    const onHandleImputChange = (field, value) => {
        setFormData((prev) => {
            const updatedData = { ...prev, [field]: value };
            console.log("Updated fromData:", updatedData); 
            return updatedData;
        });
    };




    return (
        <div className='bg-black text-white mt-28 p-10 border  rounded-xl 2xl:mx-72'>

            {
                step == 1 ?
                    <LogoTitle onHandleImputChange={(v) => onHandleImputChange('titles', v)}
                        fromData={fromData} /> :
                    step == 2 ?
                        <LogoDesc onHandleImputChange={(v) => onHandleImputChange('desc', v)} fromData={fromData} /> :
                        step == 3 ?
                            <LogoColorPallete onHandleImputChange={(v) => onHandleImputChange('palette', v)} fromData={fromData} /> :
                            step == 4 ?
                                <LogoDesigns onHandleImputChange={(v) => onHandleImputChange('design', v)} fromData={fromData} /> :
                                step == 5 ?
                                    <LogoIdea onHandleImputChange={(v) => onHandleImputChange('idea', v)} fromData={fromData} /> :
                                    step == 6 ?
                                        <PricingModel
                                            fromData={fromData}
                                            onHandleImputChange={(v) => onHandleImputChange('pricing', v)} /> :

                                        null
            }


            <div className="flex items-center justify-between mt-10">
                {step != 1 && <Button onClick={() => setStep(step - 1)} className='bg-blue-600 hover:bg-blue-600'> <ArrowBigLeft /> Previous</Button>}

                <Button onClick={() => setStep(step + 1)} className='bg-orange-400 hover:bg-orange-400'>Next <ArrowBigRight /> </Button>
            </div>
        </div>
    )
}

export default CreateLogo
