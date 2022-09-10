import { useState } from 'react';
import logoSvg from '../assets/logo.svg';
import BurgerNav from './BurgerNav';

const NavBar = ({ navBar, currentLanguage, changeLanguage }) => {
  const { links, languages } = navBar;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleToggleBurgerMenu = () => {
    setShowBurgerMenu((prev) => !prev);
  };

  return (
    <>
      <section id='navBar'>
        <div className='container'>
          <a href='#' className='logo'>
            <img src={logoSvg} alt='logo' />
          </a>
          <div className='burger-nav' onClick={handleToggleBurgerMenu}>
            <i className='fa fa-bars'></i>
          </div>
          <div className='desktop-nav'>
            {links.map((link) => (
              <a key={link.id} href={link.id}>
                {link.name}
              </a>
            ))}
            <div className='select-container'>
              <span onClick={handleToggleDropdown}>
                <i className='fa-solid fa-globe'></i>
                <i className='fa-solid fa-sort-down'></i>
              </span>
            </div>
          </div>
        </div>
      </section>
      {showBurgerMenu && (
        <BurgerNav
          links={links}
          languages={languages}
          changeLanguage={changeLanguage}
          handleToggleBurgerMenu={handleToggleBurgerMenu}
        />
      )}
      {showDropdown && (
        <div className='select-options'>
          {languages.map((language) => (
            <option
              key={language.id}
              value={language.id}
              className={`option ${
                currentLanguage === language.id ? 'selected' : ''
              }`}
              onClick={changeLanguage}
            >
              {language.name}
            </option>
          ))}
        </div>
      )}
      <i className='fa-brands fa-whatsapp'></i>
    </>
  );
};

export default NavBar;
