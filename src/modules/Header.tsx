import logo from '../assets/FARAD-logga.png';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import ReactCountryFlag from "react-country-flag"

function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language: string) => {
      i18n.changeLanguage(language);
    };

    const [currentLang, setCurrentLang] = useState('se');

    const toggleLanguage = () => {
      setCurrentLang((prevLang) => {
        const newLang = (prevLang === 'en' ? 'se' : 'en');
        changeLanguage(newLang);
        return newLang;
      });
    };


    return (
        <header className="sticky top-0 z-20 shadow-md flex justify-start items-center w-screen bg-white">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-auto m-4" />
          </a>
          <h1 className="text-2xl font-bold">FARAD 2025</h1>

          <nav className="flex space-x-6 ml-auto mr-10">
            <a href="/Foretag" className="text-black text-lg font-bold hover:text-gray-300">{t("for companies")}</a>
            <a href="/Studenter" className="text-black text-lg font-bold hover:text-gray-300">{t("for students")}</a>
            <a href="/OmOss" className="text-black text-lg font-bold hover:text-gray-300">{t("about")}</a>
          </nav>

          <button onClick={toggleLanguage} className="mx-4 p-0 w-16 h-12 flex justify-center items-center">
            {currentLang === 'en' ? (
                <ReactCountryFlag countryCode="SE" svg className="w-full h-full text-4xl"/>
            ) : (
                <ReactCountryFlag countryCode="GB" svg className="w-full h-full text-4xl"/>
            )}
          </button>

        </header>
        
      );
}

export default Header;