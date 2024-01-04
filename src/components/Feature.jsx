import React from 'react'
import feature from '../assests/feature.png'

function Feature() {
    return (
        <div className='my-24 md:px-14 px-14 max-w-screen-2xl mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div className='lg:w-1/4'>
                <h2 className='text-3xl font-semibold text-primary lg:w-1/2 lg:mt-20 lg:ml-20'>session highlights</h2>


                </div>
                <div className='w-20px lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
                        <div className='bg-[rgba(255 , 255 , 255, 0.04)] rounded-[35px] h-80 shadow-xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300'>
                            <div className="text-center">
                                {/* <img src={feature} alt="" /> */}
                                <h2 className='text-2xl font-bold text-primary mb-3'>Gain Insider Tips</h2>
                                <p className="text-center">Discover the insider knowledge and strategies that have propelled Anshima to success in her career at Microsoft.</p>
                            </div>
                        </div>
                        <div className='bg-[rgba(255 , 255 , 255, 0.04)] rounded-[35px] h-80 shadow-xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300'>
                            <div className="text-center">
                                {/* <img src={feature} alt="" /> */}
                                <h2 className='text-2xl font-bold text-primary mb-3'>Placement Interview Mastery</h2>
                                <p className="text-center">Learn how to approach and excel in placement interviews, and get a step ahead in the competitive tech industry.</p>
                            </div>
                        </div>
                        <div className='bg-[rgba(255 , 255 , 255, 0.04)] rounded-[35px] h-80 shadow-xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300'>
                            <div className="text-center">
                                {/* <img src={feature} alt="" /> */}
                                <h2 className='text-2xl font-bold text-primary mb-3'> Career Insights</h2>
                                <p className="text-center">Get invaluable insights on building a successful career in software development, directly from a Microsoft expert.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
