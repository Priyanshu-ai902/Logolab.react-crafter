"use client"

import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoColorPallete from './_components/LogoColorPallete'
import LogoDesigns from './_components/LogoDesigns'
import LogoIdea from './_components/LogoIdea'

const CreateLogo = () => {
    const [step, setStep] = useState(1)
    const [fromData, setFormData] = useState()

    const onHandleImputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
        console.log(fromData)
    }



    return (
        <div className='bg-black text-white mt-28 p-10 border  rounded-xl 2xl:mx-72'>

            {
                step == 1 ?
                    <LogoTitle onHandleImputChange={(v) => onHandleImputChange('title', v)} /> :
                    step == 2 ?
                        <LogoDesc onHandleImputChange={(v) => onHandleImputChange('desc', v)} /> :
                        step == 3 ?
                            <LogoColorPallete onHandleImputChange={(v) => onHandleImputChange('palette', v)} /> :
                            step == 4 ?
                                <LogoDesigns onHandleImputChange={(v) => onHandleImputChange('design', v)} /> :
                                step == 5 ?
                                    <LogoIdea onHandleImputChange={(v) => onHandleImputChange('idea', v)} /> :

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
