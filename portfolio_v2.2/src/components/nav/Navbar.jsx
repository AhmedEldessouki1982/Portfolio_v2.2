import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import menu from '../../assets/nav/menu-icon.svg'
import close from '../../assets/nav/close-icon.svg';
import { Link } from "react-router-dom";

export default function NavBar({selectedPage, setSelectedPage }) {
  let isSmallScreen = useMediaQuery ("(max-width: 1060px)");
  let [mobileMenuOpen, setMobileMenueOpen] = React.useState(false);
  let menuItems = [
    "Home",
    "skills",
    "Projects",
    "Testimonials",
    "recent work",
    "contact"
  ].map(
    elem => elem.toLowerCase()
  );
  
  return (
    <nav className= {`flex justify-between items-center w-10/12 p-10 h-20 bg-navBar rounded-b-lg`}>
    <span className='z-30 uppercase font-semibold text-xl md:text-4xl mb-5 ml-5'>Eldes<p className ='inline text-red'>souki</p></span>
      
      {
        /*desktop screen navbar */
        !isSmallScreen?
        <div className="flex justify-between w-auto mx-10 self-center font-sans">
          {
            menuItems.map(
              (item,i) => (
                <Link to={item} onClick={() => setSelectedPage(item)} key={i} className={`capitalize cursor-pointer mx-7 ${item === selectedPage && "bg-yellow rounded-lg px-4 text-black"}`} >{item}</Link>
              )
            )
          }
        </div>
        /*Mobile screen Navbar */
        :
          <div>
            <div className='my-2'>
              { 
                !mobileMenuOpen?
                <button className= "absolute w-9 h-9 rounded-full pl-1.5 bg-red top-5 right-12" onClick={() => setMobileMenueOpen(!mobileMenuOpen)}>
                  <img src={menu} alt="menu" />
                </button>
                :
                <button className='absolute w-9 h-9 rounded-full pl-1.5 bg-red top-2 right-2 z-40' onClick={() => setMobileMenueOpen(!mobileMenuOpen)}>
                  <img src={close} alt="close" />
                </button>
              }
            </div>
              { 
                mobileMenuOpen &&
                <div onClick={() => setMobileMenueOpen(!mobileMenuOpen)} className='z-30 flex flex-col absolute w-8/12 h-full bg-blue right-0 top-0 text-black text-left p-20'>
                
                  {
                    menuItems.map(
                          (item,i) => (
                            <Link to={item} onClick={() => setSelectedPage(item)} key={i} className={`my-5 text-2xl capitalize cursor-pointer ${item === selectedPage && "bg-yellow rounded-lg text-black duration-1000"}`}>{item}</Link>
                          )
                        )
                  }     
                </div>
              }
          </div>
      }
    </nav>
  )
}