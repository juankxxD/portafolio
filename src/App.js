import React from 'react'
import Header from "./components/Header";
import './styles/App.css';
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <div className="App" data-theme='algo'>
      <LanguageProvider >
        <Header />
        <section id='perfil'></section>
      </LanguageProvider>
    </div>
  );
}

export default App;
