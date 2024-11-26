import React, { useContext } from 'react'
import ThemeContext from '../Store/ThemeContext';

const Welcome = () => {

 const {theme}  =useContext(ThemeContext);
 

  return (
    <h1 className = {`text-bold text-6xl ${theme === 'light' ? "text-gray-800 bg-slate-200" : "text-slate-200 bg-gray-8s00" } `}>Welcome to Theme changing App</h1>
  )
}

export default Welcome;s
