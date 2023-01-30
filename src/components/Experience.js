import React from 'react'
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import '../styles/Experience.css'

export default function Experience() {
  const { texts, language } = useContext(LanguageContext);

  const openItem = (e) => {
    console.log(e.target)
    e.target.classList.toggle('active')
  }
  return (
    <section id='Experience'>
      <div className='container-tittle'>
        <h2>{texts.titleExperience}</h2>
      </div>
      <div className='container-paragraph'>
        <p>{texts.textExperience}</p>
      </div>
      <ul className='experience-list'>
        <li className='experience-item' onClick={openItem}>
          <div className='item-tittle'>
            {texts.experienceDocumentation}
          </div>
          <div className='item-text'>
            Desde la recopilación de requerimientos, creación de Historias de usuario hasta
            la documentacion de las apis y del diseño
          </div>
        </li>
        <span></span>
        <li className='experience-item'>{texts.experienceDDBB}</li>
        <span></span>
        <li className='experience-item'>{texts.experienceBackend}</li>
        <span></span>
        <li className='experience-item'>{texts.experienceFrontend}</li>
      </ul>

    </section>
  )
}
