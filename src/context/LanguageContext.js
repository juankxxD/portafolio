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
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "Fullstack developer",
    headerItemAboutMe: "About me",
    headerItemExperience: "Experience",
    headerItemEducation: "Education",
    headerItemContact: "Contact",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
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

  const data = { texts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
