import { useState } from 'react';
import logoImg from '../assets/logo.png';

const NavBar = ({ navBar, currentLanguage, changeLanguage }) => {
  const { links, languages } = navBar;
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <section id='navBar'>
        <div className='container'>
          <div className='logo'>
            <img src={logoImg} alt='logo' />
          </div>
          <div>
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
    </>
  );
};

export default NavBar;
