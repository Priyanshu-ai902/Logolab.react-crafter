import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { icons } from 'lucide-react';
import { iconList } from '@/constant/icons';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from 'axios';

const BASE_URL = 'https://logoexpress.tubeguruji.com'
function IconListDialog({ selectedIcon }) {

  useEffect(() => {
    getPngIcons()
  }, [])

  const [pngIconList, setPngIconList] = useState([])
  const [openList, setOpenList] = useState(false);
  const [icon, setIcon] = useState('Anchor')
  const Icon = ({ name, color, size }) => {
    const LucideIcon = icons[name];
    if (!LucideIcon) {
      return;
    }
    return <LucideIcon color={color} size={size} />;
  };


  const getPngIcons = () => {
    axios.get(BASE_URL + '/getIcons.php').then(resp => {
      console.log(resp.data)
      setPngIconList(resp.data)
    })
  }


  return (
    <div>
      <div className=' p-3
         cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px]
          flex items-center justify-center' onClick={() => { setOpenList(true); }}>
        {icon?.includes('.png') ?
          <img src={BASE_URL + '/png/' + icon} alt='img' />
          :
          <Icon name={icon} color={'#000'} size={20} />
        }

      </div>


      <Dialog open={openList}>

        <DialogContent >
          <DialogHeader>
            <DialogTitle>Pick Your Icon</DialogTitle>
            <DialogDescription className='overflow-auto h-[400px]'>


              <Tabs defaultValue="icon" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icon">
                    Icons
                  </TabsTrigger>

                  <TabsTrigger value="color-icon">
                    Color Icons
                  </TabsTrigger>
                </TabsList>


                <TabsContent value="icon">
                  <div className='grid grid-cols-2 md:grid-cols-4
                 gap-4 lg:grid-cols-5 p-6'>
                    {iconList.map((icon, index) => (
                      <div key={index} className='p-3 border flex rounded-sm 
                         items-center justify-center' onClick={() => { selectedIcon(icon); setIcon(icon); setOpenList(false) }}>
                        <Icon name={icon} color={'#000'} size={20} />

                      </div>

                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="color-icon">
                  <div className='grid grid-cols-2 md:grid-cols-4
                 gap-4 lg:grid-cols-5 p-6'>
                    {pngIconList.map((icon, index) => (
                      <div key={index} className='p-3 border flex rounded-sm 
                         items-center justify-center' onClick={() => { selectedIcon(icon); setIcon(icon); setOpenList(false) }}>
                        <img src={BASE_URL + "/png/" + icon} alt="img" />

                      </div>

                    ))}
                  </div>

                </TabsContent>

              </Tabs>



            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>

  )
}

export default IconListDialog