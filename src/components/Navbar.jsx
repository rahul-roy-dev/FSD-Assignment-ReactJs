import React, { useEffect, useState } from "react";
import logo from "../assets/logo-qw-navbar.png";
import { Link } from "react-scroll";


const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set Toogle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  //navitem array
  const navItems = [
    {link: "Home", path: "home" },
    {link: "Services", path: "services" },
    {link: "Products", path: "products" },
    {link: "About", path: "about" },
    
  ];



  return (
    <header className="fixed z-0 w-full bg-white md:bg-white top-0 left-0 right-0">
      <nav className={`w-full flex px-10 py-4 ${isSticky ? "top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
        <div className="w-full flex items-center text-base justify-between gap-8">
          <a href="">
            <img
              className="object-fit h-[60px] w-auto inline-block items-center"
              src={logo}
              alt=""
            />
          </a>

          {/* nav items for large devices */}
          <ul className="hidden md:flex gap-[100px]">
           {
                navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={link} href={path} className="block text-xl text-orange-500 hover:text-black font-medium">
                {link}
              </Link> )
            }
          </ul>


          {/* button for large devices */}
          <div className="space-x-12 hidden lg:flex items-center font-bold">
              <a href="/" className='hidden lg:flex items-center text-orange-600 hover:text-gray-900 '>Log in</a>
              <button className='bg-[#FF6D0B] text-white py-2 px-4 transition-all duration-300 rounded hover:bg-gray-800'>Sign up</button>
          </div>

          {/* menu button for only mobile devices */ }
          <div className='md:hidden'>
              <button onClick={toggleMenu} className=' focus:outline-none focus:text-gray-500'>
                {
                  isMenuOpen ? <svg className='h-10 w-10 text-gray-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> : <svg className='h-10 w-10 text-gray-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg> 
       
                }
              </button>
          </div>
        </div>
      </nav>
      {/* Nav items for mobile */}
      <div id='nav-wrapper' className={`md:hidden space-y-4 px-4 py-8 ${ isMenuOpen ? "flex justify-center items-start" : "hidden"}`}>
        <div >
           {
                navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={link} href={path} onClick={toggleMenu} className="block text-xl text-orange-500 hover:text-black font-medium">
                {link}
              </Link> )
            }</div>
     
      </div>
    </header>
  );
};

export default Navbar;
