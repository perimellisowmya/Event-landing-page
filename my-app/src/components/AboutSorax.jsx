import React from 'react';
import feature from '../assests/feature.png';

function AboutSorax() {
  return (
    <div className='p-5 transition-all duration-300 flex items-center mt-12'>
      <div className='flex-1'>
        <div className='text-left ml-9'>
          
          <h2 className='text-xl font-bold text-primary mb-3'>👥 About SoarX Network</h2>
          <p className='text-lg mb-4'>
            SoarX Network is a dynamic community of 2500+ college students passionate about technology, innovation, and career development.
          </p>
          <div className='mb-9'>
          <p className='text-sm mb-8 '>🌟 Don't miss out on this incredible opportunity to learn from one of the best in the industry. Secure your spot now and take the first step towards your dream career! 🌟</p>
          </div>
        </div>
      </div>
      {/* <div className='flex-1 flex justify-center'>
        <img src={feature} alt="" style={{ width: '80%', maxWidth: '100px' }} />
      </div> */}
    </div>
  )
}

export default AboutSorax;
