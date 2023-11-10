import React from "react";
import aboutImg from "../assets/About-us-page.png";


// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="my-12" id="about">
      {/* about text */}
      <div className="max-w-screen-2xl mx-auto my-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center ">
          <motion.div
            className="w-[30%]"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={aboutImg} alt="" className="w-full" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5 mx-auto w-[70%]"
          >
            <h2 className="text-4xl text-gray-800 font-bold mb-4 md:w-4/5">
              <span className="text-4xl font-bold mb-4 md:w-4/5 text-[#FF6D0B]">
                Qwords
              </span>{" "}
              History
            </h2>
            <p className="w-full text-base  mb-8">
              Qwords.com didirikan pada Juli 2005 oleh Rendy Maulana saat
              berkuliah di Institut Teknologi Bandung, berawal dari sebuah ide
              bahwa ingin memiliki perusahaan yang mendukung aktivitas
              teman-teman kuliahnya (pada waktu itu) di Internet. Pada Tahun
              2005 Internet Indonesia sedang masuk dalam era perkembangan,
              ditandai dengan banyaknya pengguna Internet yang masuk ke ranah
              social media pada saat itu. Sejak November 2011, Qwords.com berada
              dibawah PT Qwords Company International. Penamaan Qwords.com
              bermula dari plesetan dari kata Keywords yang berarti kata kunci.
              Mengapa demikian? Kata kunci merupakan hal yang terpenting untuk
              menuju gerbang informasi, antara anda dan klien anda, klien anda
              dapat dengan mudah menemukan anda karena kata kunci yang tepat.
              Qwords.com Bagi sebagian komunitas, dapat diartikan perkataan dari
              Kitab (Huruf Q melambangkan Al-Quran), namun pada dasarnya, arti
              kata Qwords juga bisa diartikan bermacam versi. Web Hosting adalah
              core business dari Qwords.com. Kami menyediakan layanan penyewaan
              space untuk meletakkan file website & akses email anda di
              Internet, dan juga menyediakan layanan registrasi Domain Name atau
              alamat untuk mengakses website anda di internet.
            </p>
          </motion.div>
        </div>
      </div>

   
    </div>
  );
};

export default About;
