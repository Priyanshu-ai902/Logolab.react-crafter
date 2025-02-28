"use client"
import { LayoutGrid, icons } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';
import { ControllerValueContext } from '../_context/ControllerValue';

const BASE_URL = 'https://logoexpress.tubeguruji.com'


function LogoPlayGround() {
    const { value, setValue } = useContext(ControllerValueContext);

    const [storageValue, setStorageValue] = useState();
    useEffect(() => {
        console.log('change')
        setStorageValue(JSON.parse(localStorage.getItem('value')));

    }, [value])


    const downloadAsPNG = () => {
        const divToCapture = document.getElementById('divToCapture');

        html2canvas(divToCapture, {
            backgroundColor: null
        }).then(canvas => {
            const pngImage = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = pngImage;
            downloadLink.download = 'div_as_image.png';
            downloadLink.click();
        });
    };


    const Icon = ({ name, color, size }) => {
        const LucideIcon = icons[name];
        if (!LucideIcon) {
            return;
        }
        return <LucideIcon color={color} size={size} />;
    };
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-black relative'>
            <Button onClick={downloadAsPNG}
                className="absolute top-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 ">
                Download
            </Button>


            <div className='bg-gray-200 flex items-center justify-center w-[400px] h-[400px]bg-transparent outline-dashed 
            outline-gray-300'


                style={{
                    padding: storageValue?.bgPadding,

                }}>
                <div id="divToCapture" className='flex items-center justify-center bg-transparent  w-full h-full'
                    style={{
                        borderRadius: storageValue?.bgRounded,

                        background: storageValue?.bgColor
                    }}>

                    {storageValue?.icon?.includes('.png') ?
                        <img src={BASE_URL + '/png/' + storageValue?.icon} 
                        style={{
                            height:storageValue?.iconSize,
                            width:storageValue?.iconSize,
                        }}
                        alt='img' />

                        :
                        <Icon name={storageValue?.icon} color={storageValue?.iconColor} size={storageValue?.iconSize}
                            rotate={storageValue?.iconRotate}
                        />


                    }



                    {/* <Icon iconNode={burger} className='h-[512px] w-[512px] object-cover'
            style={{
                width:storageValue?.iconSize,
                height:storageValue?.iconSize,
                color:storageValue?.iconColor,
                 transform: `rotate(${storageValue?.iconRotate}deg)`
                // transform:( storageValue?.iconRotate +'deg')
            }} /> */}


                    {/* <LayoutGrid className='h-[512px] w-[512px] object-cover'  style={{
                
                color:storageValue?.iconColor,
                 transform: `rotate(${storageValue?.iconRotate}deg)`
              
            }} /> */}




                    {/* <Image src={'/cloud-moon-svgrepo-com.svg'} className='h-[512px] w-[512px] object-contain' width={512} height={512} style={{
                width:storageValue?.iconSize,
                height:storageValue?.iconSize,
                color:storageValue?.iconColor,
                transform: `rotate(${storageValue?.iconRotate}deg)`,
                fill: '#fff'
            }} /> */}


                </div>


            </div>
        </div>
    )
}

export default LogoPlayGround