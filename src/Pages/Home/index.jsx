import React from 'react'
import Header from '../../Components/Header'
import BuySell from '../../Components/BuySell'

const Home = () => {
  return (
    <div className={`bg-background`}>
        <div className={`left-[54px] fixed top-0 bottom-0 w-[2px] bg-[#E4E5E6] z-10`}></div>
        <div className={`right-[58px] fixed top-0 bottom-0 w-4 bg-secondary z-10`}></div>
        <div className={`fixed left-[42%] top-0 bottom-0 w-[2px] bg-secondary z-10`}></div>
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
            <div className={`self-end h-[600px] `}>
                <img
                    className={`absolute bottom-0 right-0`}
                    src='/building1.png'
                    style={{zIndex: 11}}
                />
            </div>
            <div style={{zIndex: 12}} className={`absolute bottom-72 self-center p-2 w-3/4`}>
                <BuySell />
            </div>
        </div>
        <div className={`h-[360px] bg-[#FDFDFD] px-[54px] flex items-center text-secondary`}>
            <div className={`font-medium text-lg`}>
                <div>
                    Best Selling Real Estate theme with
                </div>
                <div>
                    the best architecture design
                </div>
            </div>
            <div className={`absolute left-[calc(42%+2px)] text-[46px] font-semibold`}>
                Create a fully functioning website with Asgard, the most crafted and customizable.
            </div>
        </div>
    </div>
  )
}

export default Home