import React from 'react'
import { useTheme } from "../hook/useTheme";
import '../styles/Header.css';
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import MoonTheme from '../assets/MoonTheme.js';

const Header = () => {
  const { texts, handleLanguage } = useContext(LanguageContext);
  const [theme, handleChange] = useTheme('light');
  console.log(theme);
  // alert (window.navigator.language)
  return (
    <header>
      <div className='logo'>
        <a href='#'><p>Juan Pablo Ospina<br></br><span>{texts.headerTitle}</span></p></a>
      </div>
      <input type='checkbox' id='menu-check' />
      <label id='menu' htmlFor='menu-check'>
        <span id='menu-open'>&#9776;</span>
        <span id='menu-close'>X</span>
      </label>
      <div className='container-menu-right'>
        <div className='options'>
          <div>
            <MoonTheme Theme={theme} HandleChange={handleChange} />
          </div>

          <select className='select-lenguage' name="language" onChange={handleLanguage}>
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>
        <input type='checkbox' id='menu-check-tablet' />
        <label id='menu-tablet' htmlFor='menu-check-tablet'>
          <span id='menu-open'>&#9776;</span>
          <span id='menu-close'>X</span>
        </label>
        <nav className='nav-header'>
          <ul className='list-header'>
            <li className='item-header'><a href='#page-1'>{texts.headerItemAboutMe}</a></li>
            <li className='item-header'><a>{texts.headerItemExperience}</a></li>
            <li className='item-header'><a>{texts.headerItemEducation}</a></li>
            <li className='item-header'><a>{texts.headerItemContact}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header