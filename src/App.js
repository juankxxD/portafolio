import React from 'react'
import Header from "./components/Header";
import './styles/App.css';
import { LanguageProvider } from "./context/LanguageContext";
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App" data-theme='algo'>
      <LanguageProvider >
        <Header />
        <main>
        <AboutMe />
        <Experience />
        </main>
      </LanguageProvider>
    </div>
  );
}

export default App;
