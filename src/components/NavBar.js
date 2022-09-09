const NavBar = ({ navBar, changeLanguage }) => {
  const { links, languages } = navBar;
  return (
    <section id='navBar'>
      <div className='container'>
        {links.map((link) => (
          <a key={link.id} href={link.id}>
            {link.name}
          </a>
        ))}
        {languages.map((language) => (
          <button key={language.id} onClick={() => changeLanguage(language.id)}>
            {language.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default NavBar;
