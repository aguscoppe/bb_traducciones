const Services = ({ services }) => {
  const { title, data } = services;
  return (
    <section id='services'>
      <div className='container'>
        <h1 className='section-title'>{title}</h1>
        <div className='icon-wrapper'>
          {data.map((el, i) =>
            i <= 2 ? (
              <div className='icon-container' key={el.name}>
                <i className={el.icon}></i>
                <p>{el.name}</p>
              </div>
            ) : null
          )}
        </div>
        <div className='icon-wrapper'>
          {data.map((el, i) =>
            i > 2 ? (
              <div className='icon-container' key={el.name}>
                <i className={el.icon}></i>
                <p>{el.name}</p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
