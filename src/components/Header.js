import React from 'react'
import { useTheme } from "../hook/useTheme";
import Scroll from 'react-scroll';
import '../styles/Header.css';
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import MoonTheme from '../assets/MoonTheme.js';

const Link = Scroll.Link;
const scroll = Scroll.animateScroll;

const Header = ({initial}) => {
  
  const { texts, handleLanguage } = useContext(LanguageContext);
  
  const [theme, handleChange] = useTheme('dark');
  
  function scrollToTop() {
    scroll.scrollToTop({
      containerId:"main",
    });
  }

  return (
    <header className={initial && 'initial-header'}>
      <div className={initial ? 'logo initial-logo' : 'logo'} onClick={scrollToTop}>
        <p>Juan Pablo Ospina<br></br><span>{texts.headerTitle}</span></p>
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
            <li className='item-header'><Link to="AboutMe" activeClass='a-selected' spy={true} smooth={true} offset={-60} duration={300} containerId="main">{texts.headerItemAboutMe}</Link></li>
            <li className='item-header'><Link to='Experience' activeClass='a-selected' spy={true} smooth={true} offset={-60} duration={300} containerId="main">{texts.headerItemExperience}</Link></li>
            <li className='item-header'><Link to='Education' activeClass='a-selected' spy={true} smooth={true} offset={-60} duration={300} containerId="main">{texts.headerItemEducation}</Link></li>
            <li className='item-header'><Link to='Contact' activeClass='a-selected' spy={true} smooth={true} offset={-60} duration={300} containerId="main">{texts.headerItemContact}</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header