import { useEffect, useState } from 'react';
import { ENGLISH, SPANISH, data } from './data';
import NavBar from './components/NavBar';
import Header from './sections/Header';
import About from './sections/About';
import Services from './sections/Services';
import Specializations from './sections/Specializations';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [language, setLanguage] = useState(ENGLISH);

  useEffect(() => {
    const userLocale =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;
    if (userLocale.includes(SPANISH)) {
      setLanguage(SPANISH);
    }
  }, []);

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <NavBar
        navBar={data[language].navBar}
        currentLanguage={language}
        changeLanguage={changeLanguage}
      />
      <Header data={data[language].header} />
      <About about={data[language].about} />
      <Services services={data[language].services} />
      <Specializations specializations={data[language].specializations} />
      <Contact contact={data[language].contact} />
      <Footer
        contact={data[language].contact}
        services={data[language].services}
        specializations={data[language].specializations}
      />
    </>
  );
}

export default App;
