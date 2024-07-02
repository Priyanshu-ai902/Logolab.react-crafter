import { Laugh } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'
import ColorPickerController from './ColorPickerController';


function IconController() {

  const [size, setSize] = useState(200);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState('#fff');
  const storageValue = JSON.parse(localStorage.getItem('value'))

  useEffect(() => {

    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: 'Smile'
    }


    localStorage.setItem('value', JSON.stringify(updatedValue));


  }, [size, rotate, color])

  return (
    <div>
      <div className="">
        <label>Icon</label>
        <div className='p-3 cursor-pointer bg-violet-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2'>
          <Laugh />
        </div>
        <div className="py-2">
          <label className='p-2 flex justify-between items-center'>Size <span> {size} px</span></label>

          <Slider aria-label='slider-ex-1' defaultValue={200} max={512} step={1} onChange={(value) => setSize(value)}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>

        </div>
        <div className="py-2">
          <label className='p-2 flex justify-between items-center'>Rotate <span> {rotate}°</span></label>

          <Slider aria-label='slider-ex-1' defaultValue={0} max={360} step={1} onChange={(value) => setRotate(value)}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>

        </div>
      <div className="py-2">
          <label className='p-2 flex justify-between items-center'>Icon Color</label>

          <ColorPickerController hideController={true}
            selectedColor={(color) => setColor(color)} />

        </div>  
      </div>
    </div>
  )
}

export default IconController
