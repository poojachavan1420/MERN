import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../Store/ThemeContext';

const ThemeToggle = () => {

  const {theme ,toggleTheme}  =useContext(ThemeContext);

  return (
    <button className={`m-3 border-gray-950 p-2 text-xl rounded ${theme === 'light' ? "bg-slate-200 text-gray-800 " : "  bg-gray-800 text-slate-200"}` } onClick={toggleTheme}>Change Theme to {theme === 'light' ? 'Dark' : 'light'}</button>
  )
}

export default ThemeToggle;
