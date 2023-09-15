import React from 'react'
import { Building } from 'iconsax-react'

const BuySell = () => {
  return (
    <div>
        <div className={`flex text-secondary font-semibold`}>
            <div className={`w-28 py-4 bg-white text-center drop-shadow-xl`}>
                Buy
            </div>
            <div className={`w-28 py-4 bg-white text-center opacity-80`}>
                Sell
            </div>
        </div>
        <div className={`flex h-24 relative`}>
            <div className={`bg-white flex-grow flex items-center px-8 gap-4 text-gray-500`}>
                <Building variant='Bold' />
                <div className={`text-sm`}>
                    Find your dream place near you...
                </div>
            </div>
            <div className={`text-xl font-medium bg-secondary hover:bg-opacity-80 cursor-pointer text-white flex justify-center items-center max-w-[16rem] min-w-[10rem] flex-grow`}>
                Search
            </div>
        </div>
    </div>
  )
}

export default BuySell