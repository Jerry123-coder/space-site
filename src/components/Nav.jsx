import React from 'react'
import { useState } from 'react'
import * as hamburger from "../img/icon-hamburger.svg"
import * as close from "../img/icon-close.svg"



const Nav = () => {

    let [open,setOpen] = useState(false);
    const Links = [
        {name: 'HOME'},
        {name: 'DESTINATION'},
        {name: 'CREW'},
        {name: 'TECHNOLOGY'},
    ]

  return (
    <nav className='flex justify-between items-center p-5'>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" ><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
      {/* <div className='z-20 fixed right-5 top-6 cursor-pointer md:hidden' onClick={() => setOpen(!open)} >      
        
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
      </div> */}
    

    <img 
    src={open ? close : hamburger}
    className='z-20 w-10 h-10 fixed right-5 top-6 cursor-pointer md:hidden' onClick={() => setOpen(!open)} />
    
    <ul className={`bg-[#ffffff14] backdrop-blur-lg md:pl-10 pr-28 z-10 md:rounded-full md:static fixed top-0 right-0 md:h-auto h-screen duration-500 ease-out ${!open ? 'right-[-100%]' : 'right-0'}`}>
        {
           Links.map((Link, index)=>
        <li key={index} className='md:inline-block md:ml-10 ml-5 max-sm:my-5 border-b-2 border-transparent hover:border-white duration-300'>
            <a href='link' className='text-white text-sm md:py-5 py-3 inline-block'>
                <span className='font-bold mr-1.5'>0{index}</span>{Link.name}</a>
        </li>
        ) 
    }
    </ul>

    </nav>
  )
}

export default Nav
