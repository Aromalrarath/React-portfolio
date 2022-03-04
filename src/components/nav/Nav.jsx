import React from 'react'
import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineMessage} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import './nav.css'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={()=>setActiveNav('#header')} className={activeNav==='#header'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experiance" onClick={()=>setActiveNav('#experiance')} className={activeNav==='#experiance'?'active':''}><AiOutlineBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services'?'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'?'active':''}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav