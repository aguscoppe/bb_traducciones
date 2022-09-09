const Services = ({ services }) => {
  const { title, data } = services;
  return (
    <section id='services'>
      <div className='container'>
        <h1>{title}</h1>
        {data.map((el) => (
          <div key={el.name}>
            <i className={el.icon}></i>
            <p>{el.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
