import React from 'react'

const Hero = () => {
  return (
    <div  id='hero'  className='mt-[92px] w-full h-[40vw] max-h-[500px] lg:h-[600px] bg-white text-black flex flex-col items-center justify-center'>
            <div className='w-full p-[5%] md:p-[0%] lg:w-[80%] flex flex-col h-full justify-center items-center text-center'>
                <h1 className='text-[4vw] lg:text-[42px] font-extrabold text-gray-700'>Cloud Hosting Indonesia
untuk <span className='text-[#FF6D0B]'>Kesuksesan</span> Websitemu!</h1>
                <p className='w-[100%] xl:w-[68%] text-[3vw] lg:text-[30px] text-gray-700 '>Qwords menawarkan layanan Cloud Hosting Akses Cepat, Standar Keamanan Tinggi, Uptime Server 99,99%</p>
            </div>
                <button className='h-[65px] px-4 rounded-md bg-[#f94f46] text-white font-bold text-sm md:text-lg hover:bg-[#FF6D0B] '>Mulai Sekarang Juga!</button>
          
        </div>
  )
}

export default Hero