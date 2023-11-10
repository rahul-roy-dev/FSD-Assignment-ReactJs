import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const DiscountBanner = () => {
  return (
    <div id='discount-banner' className='w-full px-4 lg:px-8 mx-auto my-12'>
    <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}

        className='w-full p-[5%] md:p-[0%] lg:w-[80%] text-center mx-auto'>
        <h2 className="text-[4vw] lg:text-[62px] text-gray-800 font-bold mb-4">
            Cloud Hosting Indonesia</h2>
        <span className='text-[4vw] lg:text-[62px] font-bold mb-4 text-[#FF6D0B]'>Diskon Hingga 50%</span>
        <p className="text-[3vw] lg:text-[30px] mt-[3vw] px-[20px] lg:px-[40px]">
            Layanan cloud hosting indonesia terbaik dengan teknologi andal dan hardware kelas terbaik untuk website Anda</p>
    </motion.div></div>
  )
}

export default DiscountBanner