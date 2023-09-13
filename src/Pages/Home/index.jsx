import React from 'react'
import Header from '../../Components/Header'

const Home = () => {
  return (
    <div className={``}>
        <Header />
        <div className={`text-onprimary flex items-center w-max mx-auto mt-10`}>
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
        <div className={`bg-blue-200 flex justify-end mt-4`}>
            <div>
                <img
                    src='/public/building1.png'
                />
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Home