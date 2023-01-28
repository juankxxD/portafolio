import React, { useEffect, useState } from 'react'
import Header from "./components/Header";
import './styles/App.css';
import { LanguageProvider } from "./context/LanguageContext";
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  const [initStyle, setInitStyle] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setInitStyle(!initStyle);
    }, 4000);
  }, [])
  
  return (
    <div className="App" data-theme=''>
      <LanguageProvider >
        <Header initial={initStyle} />
        <main id='main' className={initStyle && 'style-initial-main'}>
          <AboutMe />
          <Experience />
          <Education />
        </main>
      </LanguageProvider>
    </div>
  );
}

export default App;
