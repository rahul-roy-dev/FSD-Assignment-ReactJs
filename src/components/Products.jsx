import { Card } from 'flowbite-react';
import React from 'react';

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import Disk from "../assets/products/disk-icon.png";
import Bandwidth from "../assets/products/bandwidth-icon.png";
import Cpu from "../assets/products/cpu-icon.png";
import Addon from "../assets/products/addon-icon.png";


const Products = () => {
    const products = [
        {
            id: 1,
            title: "Value Cloud Hosting",
            subtitle: "VCH1",
            price_ori: "Rp 24.500",
            price_discount: "Rp 14.500",
            image: "/src/assets/yellow-solid.jpeg",
            disk: "3GB",
            bandwidth: "Unlimited",
            cpu: "0.5 Core",
            addon: "No"
        },

        {
            id: 2, title: "Unlimited Hosting",
            subtitle: "Signature",
            price_ori: "Rp 114.000",
            price_discount: "Rp 89.900",
            image: "/src/assets/orange-solid.jpg",
            disk: "Unlimited",
            bandwidth: "Unlimited",
            cpu: "1 Core",
            addon: "5 / 5"
        },

        {
            id: 3, title: "High Performance",
            subtitle: "HPCH Bisnis 1",
            price_ori: "Rp 109.000",
            price_discount: "Rp 79.000",
            image: "/src/assets/red-solid.jpg",
            disk: "3GB",
            bandwidth: "Unlimited",
            cpu: "1 Core",
            addon: "-"
        },
    ];
    return (
        <div id='products' className='w-full px-4 lg:px-8 mx-auto'>
        

            {/* all products */}
            <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
               

                className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 items-center justify-between mt-16'>
                {
                    products.map(products => <div key={products.id} className='w-full mx-auto relative mb-12 cursor-pointer flex flex-col'>
                        <img src={products.image} alt="" className='w-full rounded-md h-[520px] mx-auto hover:scale-95 transition-all duration-300' />
                        <div className=' text-center px-4 py-4 text-white text-xl md:w-3/4 mx-auto absolute top-[5%] left-0 right-0'>
                            <h2>{products.title}</h2>
                            <h3>{products.subtitle}</h3><h3 className='mb-3 text-neutralGrey line-through font-semibold'>{products.price_ori}</h3>
                        </div>
                        <div className=' h-[420px] text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute -bottom-12 left-0 right-0'>

                            <h3 className='mb-3 text-black text-xl font-semibold'>{products.price_discount}</h3>

                            <div className='flex flex-col gap-4'>    
                          
                                <div className='flex gap-4 text-left'>
                                    <img src={Disk} className='h-[30px] w-[30px]  rounded-2xl' alt="" />
                                    <div>
                                        <h2>Disk</h2>
                                        <span>{products.disk}</span>
                                    </div>

                                </div>
                       
                               
                                    <div className='flex gap-4 text-left'>
                                        <img src={Bandwidth} className='h-[30px] w-[30px]  rounded-2xl' alt="" />
                                        <div>
                                            <h2>Bandwidth</h2>
                                            <span>{products.bandwidth}</span>
                                        </div>

                                    </div>
                                
                                
                                    <div className='flex gap-4 text-left'>
                                        <img src={Cpu} className='h-[30px] w-[30px]  rounded-2xl' alt="" />
                                        <div>
                                            <h2>Core CPU</h2>
                                            <span>{products.cpu}</span>
                                        </div>

                                    </div>
                               
                               
                                    <div className='flex gap-4 text-left'>
                                        <img src={Addon} className='h-[30px] w-[30px]  rounded-2xl' alt="" />
                                        <div>
                                            <h2>Addon / Parked Domain</h2>
                                            <span>{products.addon}</span>
                                        </div>

                                    </div> <div className="flex mt-[-10px] py-8 items-center justify-center">
                                        <button className="px-7 py-3 bg-[#FF6D0B] rounded hover:bg-gray-800 text-white">Beli sekarang</button>
                                    </div>
                               
                                </div>

                        </div>
                    </div>)
                }
            </motion.div>

        </div>
    );
};

export default Products;