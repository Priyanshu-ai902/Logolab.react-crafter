"use client"

import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'


const Header = () => {
  const { user } = useUser()
  return (
    <div>
      <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 p-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14H-gHHe4Rcm_UzdT8lFP-QDnFJXioXObJQ&s"
            alt="Logo"
            width={45}
            height={45}
          />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Logolab
          </h1>
        </div>




        <div className=" flex gap-3 items-center">
          {user ? <Button>DashBoard</Button> :
            <Button className="text-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  mt-0">
              Get started
            </Button>}
          <UserButton />
        </div>
      </div>


      

    </div>

  )
}

export default Header
