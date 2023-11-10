import React from 'react'

import AssetsHosting from "../assets/Clients.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";



const Companies = () => {
  return (
    <div className='bg-[#dddcdc] w-full max-w-full py-8 h-full lg:h-[60vw] lg:max-h-[700px] px-[40px]  mx-auto flex justify-center items-center text-center'>
           {/* company stats */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        className="max-w-screen-2xl mx-auto w-full"
      >
        <div className="flex flex-col md:flex-row justify-start items-center gap-8">
          <div className="md:w-1/3">
            <img src={AssetsHosting} alt="" />
          </div>

         
          <div id='companies'  className="md:w-2/3 mx-auto">
            <div>
              <h2 className="text-4xl text-gray-800 font-bold mb-4 md:w-4/5">
                Our Clients
              </h2>

              <div>
                <div id="client" className="flex gap-4 items-center justify-center flex-wrap">
                  <img
                    src="/src/assets/Icon-clients.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/Forisa-client.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/Elsheskin-client.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/Horison-client.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/Cimory-clients.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/MD-client.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <div className="flex gap-8 items-center"></div>
                </div>
              </div>

              <h2 className="text-4xl text-gray-800 font-bold mb-4 md:w-4/5">
                Our Partners
              </h2>

              <div>
                <div id="partner" className="flex gap-8 items-center justify-center flex-wrap">
                  <img
                    src="/src/assets/Google-partner.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/Cpanel-partner.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/Idea-partner.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/Archi-partner.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <img
                    src="/src/assets/dotid-partner.png"
                    alt=""
                    className="cursor-pointer"
                  />
                  <div className="flex gap-8 items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Companies