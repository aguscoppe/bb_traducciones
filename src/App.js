import { useEffect, useState } from 'react';
import { ENGLISH, SPANISH, data } from './data';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Specializations from './components/Specializations';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <NavBar navBar={data[language].navBar} changeLanguage={changeLanguage} />
      <Header data={data[language].header} />
      <About about={data[language].about} />
      <Services services={data[language].services} />
      <Specializations specializations={data[language].specializations} />
      <Contact contact={data[language].contact} />
      <Footer
        links={data[language].links}
        services={data[language].services}
        specializations={data[language].specializations}
      />
    </>
  );
}

export default App;
