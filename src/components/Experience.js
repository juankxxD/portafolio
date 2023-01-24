import React from 'react'
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export default function Experience() {
    const { texts, language } = useContext(LanguageContext);
  return (
    <section id='Experience'>
        <h2>{texts.textExperience}</h2>
    </section>
  )
}
