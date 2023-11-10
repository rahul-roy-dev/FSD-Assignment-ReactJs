import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='bg-[#13151b] w-full'>
      <div className='pt-[50px] pb-[30px] lg:px-4 lg:pt-[100px] w-full'>
        <div className='flex flex-col lg:flex-row gap-[100px] space-x-[0px] w-full  lg:space-x-[15%] lg:px-[100px] px-[20px] justify-center'>
      <div className=' space-y-4 flex flex-col '>
             
              <h2 className='text-white font-extrabold text-xl'>Customer Care</h2>
              
                <Link href="#" className="text-white">
                  Pembayaran
                </Link>
                <Link href="#" className="text-white">
                  Faktur Pajak
                </Link>
                <Link href="#" className="text-white">
                  Bantuan 24 jam
                </Link>
                <Link href="#" className="text-white">
                  Qwords Rewards
                </Link>
                <Link href="#" className="text-white">
                  Knowledge Base
                </Link>
            
            </div>

            <div className=' space-y-4  flex flex-col'>
             
              <h2 className='text-white font-extrabold text-xl'>Mengenai Kami</h2>
                <Link href="#" className="text-white">
                Corporate Website
                </Link>
                <Link href="#" className="text-white">
                Qwords History
                </Link>
                <Link href="#" className="text-white">
                Qwords Differences
                </Link>
                <Link href="#" className="text-white">
                Media Publication
                </Link>
                <Link href="#" className="text-white">
                  Network & Infrastructure
                </Link>
            
            </div>

            <div className=' space-y-4 flex flex-col '>
            <h2 className='text-white font-extrabold text-xl'>Alamat Kantor</h2>
              
              <h3 className='text-white font-bold text-lg'> Kantor Jakarta</h3>
              <span className='text-white'>Gedung Cyber 1 Lantai 3, Jl.Kuningan Barat no.8, Jakarta 12710 - Indonesia 021 39708800</span>


              <h3 className='text-white font-bold text-lg'>Kantor Yogyakarta</h3>
              <span className='text-white'>Jl. Blotan no. 18 Kayen Wedomartani, Ngemplak, Sleman, Yogyakarta 55584 - Indonesia 0274 6058800</span>
            
            </div>
           </div>
      <div className="text-center mt-[100px]">
              <p className=" text-white "> Copyright © 2023 PT. Qwords Company International</p>
              <p className=" text-white">All rights reserved</p>
            </div>

      </div>
    </div>
  )
}

export default Footer