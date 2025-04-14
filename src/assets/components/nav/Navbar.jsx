import React from 'react'
import './navbar.css'
import{AiFillHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{BiBook} from 'react-icons/bi'
import{RiServiceLine} from 'react-icons/ri'
import{MdOutlineMessage} from 'react-icons/md'
import { useState } from 'react'
import { IoIosRocket } from "react-icons/io";

const Navbar = () => {
  const[activeNav, setActiveNav]= useState('#')
  return (
   <nav>
    <a href="#" onClick={()=>setActiveNav('#')} className={activeNav == '#' ? 'active' :''}><AiFillHome/></a>
    <a href="#experience"onClick={()=>setActiveNav('#experience')} className={activeNav == '#experience' ? 'active' :''}><IoIosRocket/></a>
    <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav == '#about' ? 'active' :''}><AiOutlineUser/></a>
    <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav == '#portfolio' ? 'active' :''}><BiBook/></a>
    <a href="#contact"onClick={()=>setActiveNav('#contact')} className={activeNav == '#contact' ? 'active' :''}><MdOutlineMessage/></a>
   </nav>
  )
}

export default Navbar