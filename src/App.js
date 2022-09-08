import './App.css';
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

  return (
    <>
      <NavBar data={data[language].links} />
      <Header data={data[language].header} />
      <About data={data[language].users} />
      <Services data={data[language].services} />
      <Specializations data={data[language].specializations} />
      <Contact data={data[language].contact} />
      <Footer data={data[language].links} />
    </>
  );
}

export default App;
