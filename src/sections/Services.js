import Service from '../components/Service';

const Services = ({ services }) => {
  const { title, data } = services;
  return (
    <section id='services'>
      <div className='container'>
        <h1 className='section-title'>{title}</h1>
        <div className='icon-wrapper'>
          {data.map((el, i) =>
            i <= 2 ? <Service service={el} key={el.name} /> : null
          )}
        </div>
        <div className='icon-wrapper'>
          {data.map((el, i) =>
            i > 2 ? <Service service={el} key={el.name} /> : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
