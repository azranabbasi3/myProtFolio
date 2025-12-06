import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const navItems=[
    {name:"Home", id:"home"},
    {name:"About", id:"about"},
    {name:"Skills",id:"skills"},
    {name:"Services",id:"services"},
    {name:"Journey",id:"journey"}
    ];
  const [isOpen, setIsOpen]=useState(false);
  const toggleMenu=()=>{
    setIsOpen(!isOpen);
  }
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const [activeSection, setActiveSection]=useState("home");
  return (
    <header className='backdrop-blur-lg  bg-[#f8f7f1]shadow-md    flex items-center justify-between p-4 px-10 w-full top-0 left-0 z-500 sticky bg-[#f8f7f1] text-[#0b2e41] '>
         <img src="/mylogo.svg" className='h-12 cursor-pointer' alt="Logo"
         onClick={()=> handleScroll('home')}/>
        <nav className='hidden lg:flex'>
            <ul className='flex gap-8 text-sm tracking-wider uppercase font-medium'>
              {
                navItems.map((item)=>(
                  <li 
                  key={item.id}
                  onClick={()=> {handleScroll(item.id); setActiveSection(item.id);}}
                  className={`cursor-pointer ${activeSection===item.id  ? 'text-[#286f6c] font-semibold' : 'hover:text-[#286f6c]'} transition-colors`}>{item.name}</li>
                ))
              }
            </ul>
        </nav>
        <div className='flex items-center gap-3'>
           <button
           onClick={()=>handleScroll("contact")}
            className='px-5 py-2  bg-[#0b2e41] text-[#f8f7f1] border border-[#f8f7f1] rounded-full hover:bg-[#286f6c] hover:text-white transition-all duration-300'>Contact</button>
        <button onClick={toggleMenu} className='lg:hidden'>{isOpen?<FaTimes size={25} className='absolute z-1000 top-5 text-[#f8f7f1]'/>:<FaBars size={20}/>}</button>
        </div>

        {
          isOpen && (
             <nav className={`absolute top-0 left-0  w-full bg-[#154748]/90 flex flex-col items-center justify-center text-[#f8f7f1] py-10 px-5 gap-3 lg:hidden transition-all duration-500 
             ${isOpen? 'opacity-100 translate-y-0' :'opacity-0 translate-y-full '}`}>
              {
                navItems.map((item)=>(
                       <li key={item.id} 
                      //  onClick={toggleMenu}
                         onClick={() => handleScroll(item.id)}
                       className='hover:text-[#286f6c] transition-colors list-none mt-2'>{item.name}</li>
                ))
              }
            
        </nav>
          )
        }
    </header>
  )
}

export default Navbar