const Header = ({ data }) => {
  const { title, subtitle, button, description } = data;
  return (
    <section id='header'>
      <div className='header-img'>
        <div className='container'>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <a className='button' href={button.id}>
            {button.text}
          </a>
        </div>
      </div>
      <div className='container'>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Header;
