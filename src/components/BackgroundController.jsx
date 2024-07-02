import React, { useState } from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'

function BackgroundController() {

  const [rounded, setRounded] = useState(0);
  return (
    <div>
      <div className="py-2">
          <label className='p-2 flex justify-between items-center'>Rounded <span> {rounded} px</span></label>

          <Slider aria-label='slider-ex-1' defaultValue={200} max={512} step={1} onChange={(value) => setRounded(value)}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>

        </div>
    </div>
  )
}

export default BackgroundController
