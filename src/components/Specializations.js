const Specializations = ({ specializations }) => {
  const { title, data } = specializations;
  return (
    <section id='specializations'>
      <div className='container'>
        <h1 className='section-title'>{title}</h1>
        <div className='data-wrapper'>
          <ul>
            {data.map((el, i) => (i <= 4 ? <li key={el}>{el}</li> : null))}
          </ul>
          <ul>
            {data.map((el, i) => (i > 4 ? <li key={el}>{el}</li> : null))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Specializations;
