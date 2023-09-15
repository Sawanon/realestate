import React from 'react'
import Header from '../../Components/Header'
import BuySell from '../../Components/BuySell'

const Home = () => {
  return (
    <div className={`bg-background`}>
        <Header />
        <div className={`text-onprimary flex justify-center items-center pt-10 relative z-10`}>
            <div className={`tracking-[-0.4rem] text-8xl font-bold`}>
                <div className={``}>
                    Find Your
                </div>
                <div className={`mt-4`}>
                    Dream Place.
                </div>
            </div>
            <div className={`-rotate-90 text-xs font-medium select-none`}>
                <div>
                    ASGARD @2022
                </div>
                <div>
                    ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
        <div className={`bg-background flex flex-col pt-4 relative`}>
            <div className={`self-end h-96 `}>
                <img
                    className={`absolute bottom-0 right-0`}
                    src='/building1.png'
                />
            </div>
            <div className={`absolute -bottom-4 self-center p-2 w-3/4`}>
                <BuySell />
            </div>
        </div>
    </div>
  )
}

export default Home