import React from "react";
import { Carousel } from "flowbite-react";

import slide1 from "../assets/slider1.png"
import slide2 from "../assets/slider2.png"
import slide3 from "../assets/slider3.png"

<a href="https://storyset.com/technology">Technology illustrations by Storyset</a>

const Slider= () => {
  return (
    <div id="services" className=" bg-white w-full max-w-full py-8 h-[600px] lg:h-[60vw] lg:max-h-[700px]">
      <div className="bg-[#dddcdc] w-full max-w-full px-4  mx-auto h-full flex justify-center items-center">
        <Carousel id="slider" className="w-full mx-auto">
          <div className="slide-wrapper">
          <div className="img-wrapper">
            <img src={slide1} alt=""/>
           </div>
            {/* hero text */}
           <div className="slide-text">
            <h1 className="slider-title">Perusahaan</h1>
            <p>Wujudkan website perusahaan profesional dan berkelas dengan dukungan web hosting terbaik dan fitur keamanan ekstra</p>
            <button className="px-4 py-2 bg-[#FF6D0B] rounded-md hover:bg-gray-800 text-white">Beli sekarang</button>
           </div>
          </div>
          <div className="slide-wrapper">
          <div className="img-wrapper">
            <img src={slide2} alt=""/>
           </div>
            {/* hero text */}
           <div className="slide-text">
            <h1 className="slider-title">Blogger dan Personal</h1>
            <p>Memfasilitasi blogger dengan infrastruktur dengan hosting indonesia terbaik serta template website premium untuk tampil lebih profesional</p>
            <button className="px-4 py-2 bg-[#FF6D0B] rounded-md hover:bg-gray-800 text-white">Beli sekarang</button>
           </div>
          </div>
          <div className="slide-wrapper">
          <div className="img-wrapper">
            <img src={slide3} alt=""/>
           </div>
            {/* hero text */}
           <div className="slide-text">
            <h1 className="slider-title">Sekolah</h1>
            <p>Infrastruktur web hosting terbaik untuk menunjang kegiatan e-learning.didukung platform MOODLE khusus pembelajaran daring</p>
            <button className="px-4 py-2 bg-[#FF6D0B] rounded-md hover:bg-gray-800 text-white">Beli sekarang</button>
           </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;