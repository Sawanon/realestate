import React from 'react'
import {SearchNormal1, ShoppingCart} from 'iconsax-react'

const Header = () => {
  return (
    <div className={`bg-background text-onprimary flex justify-between py-4 px-8`}>
        <div className={`text-onprimary text-3xl font-bold`}>
            ASGARD
        </div>
        <div className={`flex items-center w-[540px] flex-initial font-medium uppercase justify-evenly text-sm`}>
            <div className={`cursor-pointer hover:bg-white hover:bg-opacity-90 rounded-lg px-2`}>
                Home
            </div>
            <div className={`cursor-pointer hover:bg-white hover:bg-opacity-90 rounded-lg px-2`}>
                AWARDS
            </div>
            <div className={`cursor-pointer hover:bg-white hover:bg-opacity-90 rounded-lg px-2`}>
                SERVICE
            </div>
            <div className={`cursor-pointer hover:bg-white hover:bg-opacity-90 rounded-lg px-2`}>
                CONTACT
            </div>
        </div>
        <div className={`flex items-center gap-5`}>
            <div>
                <SearchNormal1 />
            </div>
            <div>
                <ShoppingCart />
            </div>
        </div>
    </div>
  )
}

export default Header