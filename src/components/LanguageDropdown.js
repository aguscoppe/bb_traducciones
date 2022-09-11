const LanguageDropdown = ({ languages, currentLanguage, changeLanguage }) => {
  return (
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
  );
};

export default LanguageDropdown;
