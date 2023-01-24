import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";
const translations = {
  es: {
    headerTitle: "Desarrollador fullStack",
    headerItemAboutMe: "Sobre mi",
    headerItemExperience: "Experiencia",
    headerItemEducation: "Educacion",
    headerItemContact: "Contactarme",
    textAboutMe: `Joven de 21 años con ciudadania colombiana, estudiante de Tecnología en sistemas de 
    información proximo a grado con buenas relaciones interpersonales, responsable y con muchas
    cualidades más que podrás ver mas abajo en mi cv :)`,
    download: "Descargar cv",
    textExperience: "Experiencia",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "Fullstack developer",
    headerItemAboutMe: "About me",
    headerItemExperience: "Experience",
    headerItemEducation: "Education",
    headerItemContact: "Contact",
    textAboutMe: `21 year old young man with Colombian citizenship, 
    student of Information Systems Technology next to degree with good interpersonal 
    relationships, responsible and with many more qualities that you can see below in my cv.`,
    download: "Download cv",
    textExperience: "Experience",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const data = { texts, handleLanguage, language };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
