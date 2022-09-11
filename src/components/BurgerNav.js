import { useState } from 'react';
import { ENGLISH } from '../data';

const BurgerNav = ({
  links,
  languages,
  changeLanguage,
  currentLanguage,
  handleToggleBurgerMenu,
}) => {
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguageMenu = () => {
    handleToggleBurgerMenu(true);
    setShowLanguages((prev) => !prev);
  };

  return (
    <div className='burger-menu' onClick={handleToggleBurgerMenu}>
      {links.map((link) => (
        <a key={link.id} href={link.id}>
          {link.name}
        </a>
      ))}
      <span onClick={toggleLanguageMenu}>
        <p>{currentLanguage === ENGLISH ? 'Language' : 'Idioma'}</p>
        <i className='fa-solid fa-sort-down'></i>
      </span>
      {showLanguages &&
        languages.map((language) => (
          <option
            key={language.id}
            value={language.id}
            onClick={changeLanguage}
          >
            {language.name}
          </option>
        ))}
    </div>
  );
};

export default BurgerNav;
