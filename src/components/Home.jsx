import React from 'react';
import Footer from "../components/Footer";
import About from "../components/About";
import Products from "../components/Products"
import Slider from "../components/Slider"
import Navbar from "../components/Navbar"
import Hero from './Hero';
import DiscountBanner from '../components/DiscountBanner';
import Companies from '../components/Companies';


const Home = () => {
  return (<>
 
     <div className='delayed'>
  <Navbar/>
    <div id='home' className='bg-white flex-col gap-4'>
      <Hero/>  
      
    
      <Slider/>
      <DiscountBanner/>
      <Products/>
      <About/>
      <Companies/>
      
      </div>
    <Footer/></div>
 
 
    </>
  )
}

export default Home